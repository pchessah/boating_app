import React, { Component } from "react";
import items from "./data";

const VesselContext = React.createContext();
class VesselProvider extends Component {
  state = {
    vessels: [],
    sortedVessels: [],
    featuredVessels: [],
    loading: true,
  };

  componentDidMount() {
    let vessels = this.formatData(items);
    let featuredVessels = vessels.filter((vessel) => vessel.featured === true);
    this.setState({
      vessels,
      featuredVessels,
      sortedVessels: vessels,
      loading: false,
    });
  }


  formatData(items) {    
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let vessel = { ...item.fields, images, id }; 
        
      return vessel;
    });
    return tempItems
  }

  getVessel = (slug) => {
    let tempVessels = [...this.state.vessels];
    const vessel = tempVessels.find((vessel) => vessel.slug === slug);
    return vessel
  };

  render() {
    return (
      <VesselContext.Provider
        value={{ ...this.state, getVessel: this.getVessel }}
      >
        {this.props.children}
      </VesselContext.Provider>
    );
  }
}

export { VesselContext, VesselProvider, VesselConsumer };

const VesselConsumer = VesselContext.Consumer;
