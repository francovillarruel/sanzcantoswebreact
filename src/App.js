/* eslint-disable react/jsx-no-comment-textnodes */
import MyCarousel from './components/MyCarousel'
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import CenteredComponent from './components/TextoSobreNosotros'
import './App.css'
import ModalWithImageAndText from './components/ModalWithImageAndText'
import imagen from './imagenes/imagen-causas-laborales.jpg'
import imagen2 from './imagenes/imagen-causas-civiles.jpg'
import imagen3 from './imagenes/imagen-causas-de-familia.jpg'
import imagen4 from './imagenes/imagen-causas-penales.jpg'
import ContactComponent from './components/ContactComponent'
import ContactForm from './components/ContactForm'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarraRoute from './components/NavBarra'
  

function App () {

 useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;

      // Aquí establece la altura a partir de la cual se activará la animación
      const triggerHeight = 200;

      if (scrollPosition > triggerHeight) {
        document.body.classList.add('scroll-animation');
      } else {
        document.body.classList.remove('scroll-animation');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
 return (
<Router>
      <div 
        className='App'
        style={{
          backgroundColor: '#fdf9f5',
          width: '100%',
          display: 'flex',
          flexDirection: 'column'
 
            
        }}
      >
        <div>
          <NavBarraRoute />
          <MyCarousel />
          <CenteredComponent className="slide-in" />
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              <ModalWithImageAndText
                className="slide-in"
                imageUrl={imagen}
                altText='Texto alternativo de la imagen'
                buttonText='CAUSAS LABORALES'
                modalTitle='Causas Laborales'
                paragraphText='Asesoramos en todos los aspectos del derecho laboral y la seguridad social, así como en procesos administrativos, negociaciones colectivas y juicios laborales.'
                listItems={[
                  'Demandas por Despido Injustificado, indebido e improcedente.',
                  'Demanda por despido indirecto',
                  'Demandas por Nulidad del despido',
                  'Demanda de Tutela laboral (Vulneración de derechos Fundamentales)',
                  'Demanda por Cobro de prestaciones laborales',
                  'Procedimiento Monitorio',
                  'Juicios de Cobranza Laboral y Previsional',
                  'Juicios por accidentes del trabajo',
                  'Asesoría sindical',
                  'Denuncias por prácticas antisindicales',
                  'sesoría a empresas sobre cumplimiento de la ley laboral argentina.'
                ]}
              />

              <ModalWithImageAndText className="slide-in"
                imageUrl={imagen2}
                altText='Texto alternativo de la imagen'
                buttonText='CAUSAS CIVILES'
                modalTitle='Causas Civiles'
                paragraphText='Nos encargamos en primera y en segunda instancia, asumiendo la representación de nuestros clientes en juicios ordinarios, sumarios, ejecutivos y especiales.'
                listItems={[
                  'Litigios civiles y comerciales',
                  'Arbitrajes',
                  'Resolucion y cumplimiento de contratos',
                  'Juicios de arrendamiento',
                  'Preciarios',
                  'Juicios ejecutivos y cobranza judicial',
                  'Redacciones de contratos',
                  'Asesoria a empresas en materia societaria',
                  'Herencias y testamentos',
                  'Derecho del cosumidor',
                  'Gestiones no contenciosas ante tribunales'
                ]}
              />
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center'
              }}
            >
              <ModalWithImageAndText className="slide-in"
                imageUrl={imagen3}
                altText='Texto alternativo de la imagen'
                buttonText='CAUSAS DE FAMILIA'
                modalTitle='Causas de Familia'
                paragraphText='Nuestro estudio está preparado en el derecho de familia, quienes son capaces de representar al cliente en juicio, velar por sus intereses.'
                listItems={[
                  'El matrimonio y sus efectos.',
                  'Filiacion: Patria potestad / Cuidado Personal.',
                  'Guardas_ Tutela / Curatela.',
                  'Estado Civil: Reclamacion de Paternidad / impugnacion de Paternindad / Susceptibilida de Adopcion / Adopcion.',
                  'Derecho de Alimentos: Aumento / Rebaja / Cumplimiento.',
                  'Relacion del HIJO/A con el padre que no convive: Relacion Directa y Regular / Modificacion del Regimen',
                  'Medidas Proteccionales: Proteccional / Entrega Inmediate / Suspencion RDR.',
                  'Mediacion Familiar.',
                  'Voluntarias',
                  'Autorizacion para salir del Pais.',
                  'Divorcio y separacion judicial.',
                  'Otras causas.'
                ]}
              />
              <ModalWithImageAndText className="slide-in"
                imageUrl={imagen4}
                altText='Texto alternativo de la imagen'
                buttonText='CAUSAS PENALES'
                modalTitle='Causas Penales'
                paragraphText='Estamos preparados para enfrentar el nuevo proceso penal, y podemos asegurar una defensa integral tanto en juicio oral, como en salidas alternativas.'
                listItems={[
                  'Formalizaciones.',
                  'Procedimientos Simplificados.',
                  'Salidas Alternativas.',
                  'Preparacion de Juicio Oral.',
                  'Presentacion de Querellas.',
                  'Violencia Intrafamiliar',
                  'Discucion de medidas cautelares'
                ]}
              />
            </div>
          </div>

          <div
            style={{
              textAlign: 'center',
              width: '100%',
              fontFamily: 'Kanit, sans-serif'
            }}
          >
            <h1>CONTÁCTENOS</h1>
            <p>
              El Derecho es un asunto complicado.
              <br />
              Puede causarle un gran problema si lo ignora. ¡Déjanos ayudarte!
            </p>
          </div>
          <br />
          <div style={{ display: 'inline-flex', width: '100%' }}>
            <ContactForm />
            <ContactComponent />
          </div>
         </div>
      </div>
    </Router>
  )
}

export default App
