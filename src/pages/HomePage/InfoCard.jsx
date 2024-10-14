import { Container } from "react-bootstrap"

const InfoCard = ({image, title, text}) => {
  return (
    <Container className="infocard d-flex flex-column align-items-center text-center">
      <div className="image p-1">

      </div>
      <h3 className="my-2">{title}</h3>
      <p className="">{text}</p>
    </Container>
  )
}

export default InfoCard