import React, { Component } from "react";
import { VesselContext } from "../../Context";
import { Link } from "react-router-dom";
import Hero from "../Hero/Hero";
import Banner from "../Banner/Banner";
import defaultBcg from "../../images/room-1.jpeg"

class SingleVessel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }

  static contextType = VesselContext;

  // componentDidMount(){

  // }

  render() {
    const { getVessel } = this.context;
    const vessel = getVessel(this.state.slug);
    if (!vessel) {
      return (
        <div className="error">
          <h3>No such vessel could be found</h3>
          <Link to="/vessels" className="btn-primary">
            Back to vessels
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = vessel;
    return (
      <Hero hero="roomsHero">
        <Banner title={`${name} vessel`}>
          <Link to="/vessels" className="btn-primary">
            Back to vessels
          </Link>
        </Banner>
      </Hero>
    );
  }
}

export default SingleVessel;
