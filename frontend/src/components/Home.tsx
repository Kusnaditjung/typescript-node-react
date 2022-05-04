import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {    
    return (
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/index">Tendable</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/contact">Contact </Nav.Link>
      <Nav.Link href="/login">Login </Nav.Link>      
    </Nav>
    </Container>
  </Navbar>
  );
}

export default Home;