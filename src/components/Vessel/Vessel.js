import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../images/room-1.jpeg";

const Vessel = ({ vessel }) => {
  const { name, slug, images, price } = vessel;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>Ksh {price}</h6>
          <p>per trip</p>
        </div>
        <Link to={`/vessels/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

export default Vessel;
