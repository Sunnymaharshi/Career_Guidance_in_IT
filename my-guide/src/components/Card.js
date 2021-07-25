import React from "react";
import "./Card.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyCard = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <Link
      to={`/details/${data.id}`}
      style={{
        textDecoration: "none",
        color: "black",
      }}
    >
      <Card className="my-card">
        <Card.Img
          variant="top"
          src={data.img}
          style={{
            height: "200px",
          }}
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.description}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
export default MyCard;
