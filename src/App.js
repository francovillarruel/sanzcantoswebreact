/* eslint-disable react/jsx-no-comment-textnodes */
import MyCarousel from './components/MyCarousel'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import CenteredComponent from './components/TextoSobreNosotros'
import './App.css'
import ModalWithImageAndText from './components/ModalWithImageAndText'
import imagen from './imagenes/imagen-causas-laborales.jpg'
import imagen2 from './imagenes/imagen-causas-civiles.jpg'
import imagen3 from './imagenes/imagen-causas-de-familia.jpg'
import imagen4 from './imagenes/imagen-causas-penales.jpg'
import ContactComponent from './components/ContactComponent'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBarraRoute from './components/NavBarra'

function App () {

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
          <CenteredComponent className='slide-in' />
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      
      <div style={{ display: 'flex', justifyContent: 'center' ,flex: '0 0 50%'}}>
        <ModalWithImageAndText
          className='slide-in'
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
            'Asesoría a empresas sobre cumplimiento de la ley laboral argentina.'
          ]}
        />
      </div>
      <div style={{ flex: '0 0 50%', display: 'inline-list-item', justifyContent: 'center' }}>
        <ModalWithImageAndText
          className='slide-in'
          imageUrl={imagen2}
          altText='Texto alternativo de la imagen'
          buttonText='CAUSAS CIVILES'
          modalTitle='Causas Civiles'
          paragraphText='Nos encargamos en primera y en segunda instancia, asumiendo la representación de nuestros clientes en juicios ordinarios, sumarios, ejecutivos y especiales.'
          listItems={[
            'Litigios civiles y comerciales',
            'Arbitrajes',
            'Resolución y cumplimiento de contratos',
            'Juicios de arrendamiento',
            'Preciarios',
            'Juicios ejecutivos y cobranza judicial',
            'Redacciones de contratos',
            'Asesoría a empresas en materia societaria',
            'Herencias y testamentos',
            'Derecho del consumidor',
            'Gestiones no contenciosas ante tribunales'
          ]}
        />
      </div>
      <div style={{ flex: '0 0 50%', display: 'flex', justifyContent: 'center' }}>
        <ModalWithImageAndText
          className='slide-in'
          imageUrl={imagen3}
          altText='Texto alternativo de la imagen'
          buttonText='CAUSAS DE FAMILIA'
          modalTitle='Causas de Familia'
          paragraphText='Nuestro estudio está preparado en el derecho de familia, quienes son capaces de representar al cliente en juicio, velar por sus intereses.'
          listItems={[
            'El matrimonio y sus efectos.',
            'Filiación: Patria potestad / Cuidado Personal.',
            'Guardas_ Tutela / Curatela.',
            'Estado Civil: Reclamación de Paternidad / impugnación de Paternidad / Susceptibilidad de Adopción / Adopción.',
            'Derecho de Alimentos: Aumento / Rebaja / Cumplimiento.',
            'Relación del HIJO/A con el padre que no convive: Relación Directa y Regular / Modificación del Régimen',
            'Medidas Proteccionales: Proteccional / Entrega Inmediata / Suspensión RDR.',
            'Mediación Familiar.',
            'Voluntarias',
            'Autorización para salir del País.',
            'Divorcio y separación judicial.',
            'Otras causas.'
          ]}
        />
      </div>
      <div style={{ flex: '0 0 50%', display: 'flex', justifyContent: 'center' }}>
        <ModalWithImageAndText
          className='slide-in'
          imageUrl={imagen4}
          altText='Texto alternativo de la imagen'
          buttonText='CAUSAS PENALES'
          modalTitle='Causas Penales'
          paragraphText='Estamos preparados para enfrentar el nuevo proceso penal, y podemos asegurar una defensa integral tanto en juicio oral, como en salidas alternativas.'
          listItems={[
            'Formalizaciones.',
            'Procedimientos Simplificados.',
            'Salidas Alternativas.',
            'Preparación de Juicio Oral.',
            'Presentación de Querellas.',
            'Violencia Intrafamiliar',
            'Discusión de medidas cautelares'
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
          <div style={{ dflex: '0 0 50%', display: 'flex', justifyContent: 'center' , textAlign:'center'}}>
            <ContactComponent />
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
