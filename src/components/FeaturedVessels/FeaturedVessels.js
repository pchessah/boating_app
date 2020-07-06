import React, { Component } from "react";
import { VesselContext } from "../../Context";
import Loading from "../Loading/Loading";
import Vessel from "../Vessel/Vessel";
import Title from "../Title/Title";

class FeaturedVessels extends Component {
  static contextType = VesselContext;
  render() {
    let { loading, featuredVessels: vessels } = this.context
      vessels = vessels.map((vessel) => {
        return <Vessel key={vessel.id} vessel={vessel} />;
      })
    
    return (
      <section className="featured-rooms">
        <Title title="featured vessels" />

        <div className="featured-rooms-center">
          {loading ? <Loading /> : vessels}
        </div>
      </section>
    );
  }
}

export default FeaturedVessels;
