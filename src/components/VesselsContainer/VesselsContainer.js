import React from "react";
import Loading from "../Loading/Loading";
import VesselsFilter from "../VesselsFilter/VesselsFilter";
import VesselsList from "../VesselsList/VesselsList";
import {withVesselConsumer} from "../../Context"

const VesselsContainer = ({ context }) => {
  const { loading, sortedVessels, vessels } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <VesselsFilter vessels={vessels} />
      <VesselsList vessels={sortedVessels} />
    </>
  );
};

export default withVesselConsumer(VesselsContainer);
