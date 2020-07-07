import React from "react";
import Vessel from "../Vessel/Vessel"

const VesselsList = ({ vessels }) => {
  if (vessels.length === 0) {
    return (
      <div className="empty-search">
        <h3> Unfortunately, No vessels match your parameters</h3>
      </div>
    );
  }
  return (
    <section className="roomsList">
      <div className="roomslist-center">
        {vessels.map((item) => {
          return <Vessel key={item.id} vessel={item} />;
        })}
      </div>
    </section>
  );
};

export default VesselsList;
