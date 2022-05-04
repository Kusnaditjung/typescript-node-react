import { Container, Nav, Navbar } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/Contact.css';

const Contact = () => {    
    return (
<Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/index">Tendable</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/contact" className="highlighted" >Contact </Nav.Link>
      <Nav.Link href="/login">Login </Nav.Link>      
    </Nav>
    </Container>
  </Navbar>
      );
}


export default Contact;