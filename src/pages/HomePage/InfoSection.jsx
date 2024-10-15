import React from "react";
import { Row, Col } from "react-bootstrap";
import InfoCard from "./InfoCard";
import NinjaNewsImg from "../../assets/ninja-news.webp";
import NinjaAcademyImg from "../../assets/ninja-academy.webp";
import NinjaEventsImg from "../../assets/ninja-events.webp";

const InfoSection = () => {
  return (
    <section className="info-section">
      <Row className="justify-content-center">
        <Col md={4}>
          <InfoCard
            image={NinjaNewsImg}
            imageAlt="Ninja News Illustration"
            title="News"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
          />
        </Col>
        <Col md={4}>
          <InfoCard
            image={NinjaAcademyImg}
            imageAlt="Ninja Academy Illustration"
            title="Ninja Academy"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
          />
        </Col>
        <Col md={4}>
          <InfoCard
            image={NinjaEventsImg}
            imageAlt="Ninja Events Illustration"
            title="Upcoming Events"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis orci eget turpis facilisis sollicitudin."
          />
        </Col>
      </Row>
    </section>
  );
};

export default InfoSection;
