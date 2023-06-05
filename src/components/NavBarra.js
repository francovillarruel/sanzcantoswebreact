import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBarra = () => {
  return (
    <Navbar bg="light" expand="lg" variant="light" style={{ backgroundColor: '#f4f3f1' }}>
      <Navbar.Brand href="#home">
        <img
          src={require(`../imagenes/LOGO.png`)}
          alt="Logo"
          width="240"
          height="65"
         // className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
        <div style={{ alignItems: 'self-start' }}>
          <Nav className="ml-3" style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Nav.Link href="#home" style={{ fontFamily: 'Kanit, sans-serif' }}>Inicio</Nav.Link>
            <Nav.Link href="#services" style={{ fontFamily: 'Kanit, sans-serif' }}>Servicios</Nav.Link>
            <Nav.Link href="https://www.google.com/maps/place/Estudio+Juridico+Sanz+Cantos/@-31.5365392,-68.5243745,17z/data=!3m1!4b1!4m6!3m5!1s0x96816b19851ccab9:0xeebbebfc68bce09c!8m2!3d-31.5365438!4d-68.5217996!16s%2Fg%2F11sv3yqsjc?entry=ttu" target="_blank" style={{ fontFamily: 'Kanit, sans-serif' , border: '2px solid black', borderRadius: '5px', padding: '5px 10px' }}>Ubicación</Nav.Link>
            <Nav.Link href="https://api.whatsapp.com/send?phone=5492644756350" target="_blank" style={{ fontFamily: 'Kanit, sans-serif' }}>Contacto</Nav.Link>
          </Nav>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBarra;
