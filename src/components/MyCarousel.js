import React from 'react';
import { Carousel } from 'react-bootstrap';
import "./MyCarousel.css";

const MyCarousel = () => {
  const openWhatsAppChat = (phoneNumber) => {
    window.open(`https://wa.me/${2644756350}`);
  };

  return (
    <div> 
      <Carousel >
        <Carousel.Item  >
          <img
            className="d-block w-100"
            src={require (`../imagenes/SLIDER CIVIL.jpg`)}
            style={{ opacity: '0.5' , objectFit: 'cover', width: 'auto', height: '884px' }}
            alt=''
           />
          <Carousel.Caption>
          
            <h1 style={{ color: 'black' , fontFamily: 'Kanit, sans-serif'}}> <strong>DERECHO CIVIL</strong> </h1>
            <p style={{ color: 'black' , fontFamily: 'Kanit, sans-serif' }}><strong> Es la rama del derecho privado que regula las principales relaciones civiles de las personas.</strong></p>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppChat('2644756350')}
              style={{ fontFamily: 'Kanit, sans-serif' }}
            >
              Conversar por WhatsApp
            </button>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={require(`../imagenes/SLIDER FAMILIA.jpg`)}
            style={{ opacity: '0.5' , objectFit: 'cover', width: 'auto', height: '884px' }}
            alt=''
            />
          <Carousel.Caption>
            <h1 style={{ color: 'black' , fontFamily: 'Kanit, sans-serif'}}><strong>DERECHO DE FAMILIA</strong></h1>
            <p style={{ color: 'black' , fontFamily: 'Kanit, sans-serif'}}><strong>Conjunto de normas juridicas qque regulan las relaciones personales y patrimoniales de los miembros de la familia.</strong></p>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppChat('2644756350')}
              style={{ fontFamily: 'Kanit, sans-serif' }}
              >
              Conversar por WhatsApp
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require(`../imagenes/SLIDER LABORAL.jpg`)} 
            style={{ opacity: '0.5' , objectFit: 'cover', width: 'auto', height: '884px' }}
            alt=''
            />
          <Carousel.Caption>
            <h1 style={{ color: 'black' , fontFamily: 'Kanit, sans-serif' }}> <strong> DERECHO LABORAL </strong> </h1>
            <p style={{ color: 'black' , fontFamily: 'Kanit, sans-serif'}}> <strong> Es un conjunto de reglas que se encarga de controlar las obligaciones entre trabajador y empleador.</strong></p>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppChat('2644756350')}
              style={{ fontFamily: 'Kanit, sans-serif' }}
              >
              Conversar por WhatsApp
            </button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={ require (`../imagenes/SLIDER PENAL.jpg`)}
            style={{ opacity: '0.5' , objectFit: 'cover', width: 'auto', height: '884px'}}
           alt=''
           />
          <Carousel.Caption>
            <h1 style={{ color: 'black' , fontFamily: 'Kanit, sans-serif'}}> <strong> DERECHO PENAL </strong> </h1>
            <p style={{ color: 'black' , fontFamily: 'Kanit, sans-serif'}}> <strong> Ordenamiento Juridico que comprende las normas prohibitivas que señalan los delitos y establecen las penas. </strong> </p>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsAppChat('2644756350')}
              style={{ fontFamily: 'Kanit, sans-serif' }}
            >
              Conversar por WhatsApp
            </button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MyCarousel;