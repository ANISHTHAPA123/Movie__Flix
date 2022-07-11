import React from "react";
import Navbar from "./Navbar";

import anish from "./img/anish.jpeg";

import { Row, Col, Card } from "react-bootstrap";

function AboutUs() {
  const teamData = [
    
 
    {
      img: anish,
      name: "Anish Thapa",
      desc: "Hailing from Darjeeling, West Bengal. Persuing B.tech Computer Science degree from Lovely Professional University, Jalandhar",
    },
  
  ];
  const CardComponent = (props) => {
    return (
      <Card className="mb-3">
        <div className="text-center p-3">
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundImage: `url(${props.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="rounded-circle m-auto "
          ></div>
        </div>
        <Card.Body className="text-center text-light py-5 bg-dark">
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.desc}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <>
      <div>
       
        <br />
        <h1 className="text-center">About_me</h1>
        <Row className="p-5 d-flex justify-content-center ">
          {teamData.map((value, index) => {
            return (
              <Col md={4} key={index}>
                <CardComponent
                  name={value.name}
                  desc={value.desc}
                  image={value.img}
                />
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default AboutUs;

