/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import '../components/ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
  }

  return (
    <>
      
      <>
      
        <div
          className='contact-form col-sm-6 wow slideInUp'
          style={{ visibility: 'visible', animationName: 'slideInUp' }}
        >
          <form
            onSubmit={handleSubmit}
            className='wpcf7-form'
            aria-label='Formulario de contacto'
            noValidate
          >
            <p style={{ fontFamily: 'Kanit, sans-serif' }}>
              <label>
                Su nombre (obligatorio)
                <br />
                <input
                  size='40'
                  className='wpcf7-form-control wpcf7-text'
                  type='text'
                  name='your-name'
                  value={name}
                  onChange={e => setName(e.target.value)}
                  required
                  style={{ border: '1px solid blue' }}

                />
              </label>
            </p>
            <p style={{ fontFamily: 'Kanit, sans-serif' }}>
              <label>
                Su correo electrónico (obligatorio)
                <br />
                <input
                  size='40'
                  className='wpcf7-form-control wpcf7-text wpcf7-email'
                  type='email'
                  name='your-email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  style={{ border: '1px solid blue' }}

                />
              </label>
            </p>
            <p style={{ fontFamily: 'Kanit, sans-serif' }}>
              <label>
                Su Teléfono (obligatorio)
                <br />
                <input
                  size='40'
                  className='wpcf7-form-control wpcf7-text wpcf7-tel'
                  type='tel'
                  name='tel-381'
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  required
                  style={{ border: '1px solid blue' }}
                /> 
              </label>
            </p>
            <p style={{ fontFamily: 'Kanit, sans-serif' }}>
              <label>
                Asunto
                <br />
                <input
                  size='40'
                  className='wpcf7-form-control wpcf7-text'
                  type='text'
                  name='your-subject'
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  style={{ border: '1px solid blue' }}

                />
              </label>
            </p>
            <p style={{ fontFamily: 'Kanit, sans-serif' }}>
              <label>
                Tu mensaje
                <br />
                <textarea
                  cols='40'
                  rows='10'
                  className='wpcf7-form-control wpcf7-textarea'
                  name='your-message'
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  style={{ border: '1px solid blue' }}

                ></textarea>
              </label>
            </p>
            <p style={{ fontFamily: 'Kanit, sans-serif' }}>
              <input
                className='wpcf7-form-control has-spinner wpcf7-submit'
                type='submit'
                value='Enviar'
              />
              <span className='wpcf7-spinner'></span>
            </p>
          </form>
        </div>
      </>
    </>
  )
}

export default ContactForm
