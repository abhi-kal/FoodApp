import Container from 'react-bootstrap/Container';
import './header.scss';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Link to="/" className="brand-title">
                    <Navbar.Brand href="#home" className='text-warning'>Food App</Navbar.Brand>
                </Link>
                {/* <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav> */}
            </Container>
        </Navbar>
    );
}