import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const CenteredComponent = () => {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ height: '100vh' }}
    >
      <Row className='text-center'>
        <h1 style={{ fontFamily: 'Kanit, sans-serif' }} >CUANDO LLEGA EL MOMENTO DE LUCHAR, LUCHAMOS PARA GANAR.</h1>

        <Col xs={12} sm={6}>
          <p style={{ fontFamily: 'Kanit, sans-serif' , textAlign: 'center' }}>
            Estudio Jurídico Sanz Cantos cuenta con 7 años de experiencia y
            conocimiento en las diferentes áreas legales, lo que nos permite
            entregar una completa asesoría a nuestros clientes.
            <br></br>          </p>
          <p><Image
            src={require(`../imagenes/imagen-acerca-de-adorno-1.jpg`)}
            fluid
          /></p>
        </Col>
        <Col xs={12} sm={6}>
          <Image
            src={require(`../imagenes/imagen-sobre-nosotrosC-640x400-1.jpg`)}
            fluid
          />
        </Col>
      </Row>
    </Container>
  )
}

export default CenteredComponent
