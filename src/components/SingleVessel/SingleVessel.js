import React, { Component } from "react";
import { VesselContext } from "../../Context";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import defaultBcg from "../../images/room-1.jpeg";
import StyledHero from "../StyledHero/StyledHero";

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
    const [mainImg, ...defaultImg] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} vessel`}>
            <Link to="/vessels" className="btn-primary">
              Back to vessels
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              return <img key={index} src={item} alt={name} />;
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>Info</h3>
              <h6>Price: Ksh{price}</h6>
              <h6>Size: {size} SQFT</h6>
              <h6>
                max capacity:
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6> {breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
      </>
    );
  }
}

export default SingleVessel;
