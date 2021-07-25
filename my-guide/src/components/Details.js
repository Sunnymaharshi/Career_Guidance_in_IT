import React from "react";
import { useParams } from "react-router";

const Details = (props) => {
  const { id } = useParams();
  return <h1>details-{id}</h1>;
};
export default Details;
