import { Container } from "react-bootstrap";

const InfoCard = ({ image, imageAlt, title, text }) => {
  return (
    <Container className="infocard d-flex flex-column align-items-center text-center">
      <div className="image p-1">
        <img className="infocard-img" src={image} alt="Ninja News Illustration" height="100%" />
      </div>
      <h3 className="my-2">{title}</h3>
      <p className="">{text}</p>
    </Container>
  );
};

export default InfoCard;
