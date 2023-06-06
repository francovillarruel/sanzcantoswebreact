/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { MdPlace } from 'react-icons/md';
import { BiTimer } from 'react-icons/bi';
import {BsFillPersonFill} from 'react-icons/bs';

const ContactComponent = () => {
  return (
    <div className='col-sm-6 wow slideInUp' style={{ visibility: 'visible', animationName: 'slideInUp' }}>
      <p>
        <img
          decoding='async'
          loading='lazy'
          className='alignnone size-full wp-image-8'
          src={require('../imagenes/LOGO.png')}
          width='240'
          height='65'
        />
      </p>
      <p align='justify' style={{ fontFamily: 'Kanit, sans-serif', textAlign:'center' }}>
        Estamos disponibles para dar la asesoría a sus requerimientos.
      </p>
      <p style={{ fontFamily: 'Kanit, sans-serif' }}>
        <FaWhatsapp style={{ fontSize: '50px' , fontFamily: 'Kanit, sans-serif' }} /> TELÉFONO / WHATSAPP
        <br />
        <em style={{ fontFamily: 'Kanit, sans-serif' }}>– Clic para llamar </em>–
        <br />
        <strong>
          <a href='tel:+5492644756350' style={{ fontFamily: 'Kanit, sans-serif' }} >+264 4 75 63 50</a>
          <br />
        </strong>
      </p>
      <p style={{ fontFamily: 'Kanit, sans-serif' }}>
        <FaFacebook style={{ fontSize: '50px' }} /> Facebook
        <br />
        <strong>
          <a href='http://www.facebook.com/sanzcantosej' style={{ fontFamily: 'Kanit, sans-serif' }}>
            Visitar FanPage Facebook
          </a>
        </strong>
      </p>
      <br />
      <p style={{ fontFamily: 'Kanit, sans-serif' }}> 
        <a href='mailto:sanzmarisel@gmail.com'>
          <SiGmail style={{ fontSize: '50px' }} /> CORREO ELECTRÓNICO
        </a>
        <br />

        <strong>
          <a href='mailto:sanzmarisel@gmail.com'>sanzmarisel@gmail.com</a>
        </strong>
      </p>
      <p style={{ fontFamily: 'Kanit, sans-serif' }}>
        <MdPlace style={{ fontSize: '50px' }} /> DIRECCION
        <br />
            
        <a href="https://www.google.com/maps/place/Estudio+Juridico+Sanz+Cantos/@-31.5365392,-68.5243745,17z/data=!3m1!4b1!4m6!3m5!1s0x96816b19851ccab9:0xeebbebfc68bce09c!8m2!3d-31.5365438!4d-68.5217996!16s%2Fg%2F11sv3yqsjc?entry=ttu"><h2><strong>Rivadavia 279 Este, 1° Piso Oficina 8</strong></h2></a>
      </p>
      <p style={{ fontFamily: 'Kanit, sans-serif' }}>
        <BiTimer style={{ fontSize: '50px' }} /> HORARIO
        <br />
        <strong>Las 24 horas.</strong>
      </p>
      <br />
      <p style={{ fontFamily: 'Kanit, sans-serif' }}>
        <BsFillPersonFill style={{ fontSize: '50px' }} /> FRANVI 
        <br />
        <strong>Diseño.</strong>
      </p>
      <br />
      
    </div>
  );
};

export default ContactComponent;
