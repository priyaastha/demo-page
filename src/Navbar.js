import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import './styles/Navbar.css'
import logo from './assets/1.png'

function navbar() {
    return (
        <Navbar sticky="top" expand="lg" className="nav">
        <Container>
            <Navbar.Brand href="#home" >
                <img src={logo} alt="logo" className="logo" height={30} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home" className="items">Home</Nav.Link>
                <Nav.Link href="#link" className="items">Review</Nav.Link>
                <Nav.Link href="#link" className="items">Pricing</Nav.Link>
                <Nav.Link href="#link" className="items">Contact</Nav.Link>
                <Nav.Link href="#link" className="butngrad" style={{color:"white", padding:"10px 45px"}}>Get Started</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default navbar;