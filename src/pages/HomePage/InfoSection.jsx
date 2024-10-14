import React from "react";
import { Row, Col } from "react-bootstrap";
import InfoCard from "./InfoCard";

const InfoSection = () => {
  return (
    <div className="info-section">
      <Row className="justify-content-center">
        <Col md={4}>
          <InfoCard
            title="News"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
          />
        </Col>
        <Col md={4}>
          <InfoCard
            title="Ninja Academy"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
          />
        </Col>
        <Col md={4}>
          <InfoCard
            title="Upcoming Events"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
          />
        </Col>
      </Row>
    </div>
  );
};

export default InfoSection;
