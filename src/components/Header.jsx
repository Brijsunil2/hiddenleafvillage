import "../styles/Header.css";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <header className=" py-1">
      <Container className="px-3">
        <h1>Village Hidden in the Leaves</h1>
      </Container>
    </header>
  );
};

export default Header;
