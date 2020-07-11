import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

const VesselContext = React.createContext();
class VesselProvider extends Component {
  state = {
    vessels: [],
    sortedVessels: [],
    featuredVessels: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoomBoiler",
      });
      let vessels = this.formatData(response.items);
      let featuredVessels = vessels.filter(
        (vessel) => vessel.featured === true
      );
      let maxPrice = Math.max(...vessels.map((item) => item.price));
      let maxSize = Math.max(...vessels.map((item) => item.size));
      this.setState({
        vessels,
        featuredVessels,
        sortedVessels: vessels,
        loading: false,
        price: maxPrice,
        maxPrice,
        maxSize,
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let vessel = { ...item.fields, images, id };

      return vessel;
    });
    return tempItems;
  }

  getVessel = (slug) => {
    let tempVessels = [...this.state.vessels];
    const vessel = tempVessels.find((vessel) => vessel.slug === slug);
    return vessel;
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = event.target.name;

    this.setState(
      {
        [name]: value,
      },
      this.filterVessels
    );
  };

  filterVessels = () => {
    let {
      vessels,
      type,
      capacity,
      price,
      maxSize,
      minSize,
      breakfast,
      pets,
    } = this.state;

    //all the vessels
    let tempVessels = [...vessels];

    //transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    //filter by type
    if (type !== "all") {
      tempVessels = tempVessels.filter((vessel) => vessel.type === type);
    }

    //filter by capacity
    if (capacity !== 1) {
      tempVessels = tempVessels.filter((vessel) => vessel.capcity >= capacity);
    }

    //filter by price
    tempVessels = tempVessels.filter((vessel) => vessel.price <= price);

    //filter by size
    tempVessels = tempVessels.filter(
      (vessel) => vessel.size >= minSize && vessel.size <= maxSize
    );

    //filter by breakfast
    if (breakfast) {
      tempVessels = tempVessels.filter((vessel) => vessel.breakfast === true);
    }

    //filter by pets
    if (pets) {
      tempVessels = tempVessels.filter((vessel) => vessel.pets === true);
    }

    //change state
    this.setState({
      sortedVessels: tempVessels,
    });
  };

  render() {
    return (
      <VesselContext.Provider
        value={{
          ...this.state,
          getVessel: this.getVessel,
          handleChange: this.handleChange,
        }}
      >
        {this.props.children}
      </VesselContext.Provider>
    );
  }
}

const VesselConsumer = VesselContext.Consumer;

export function withVesselConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <VesselConsumer>
        {(value) => <Component {...props} context={value} />}
      </VesselConsumer>
    );
  };
}

export { VesselContext, VesselProvider, VesselConsumer };
