import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faPhoneVolume} from '@fortawesome/free-solid-svg-icons';


function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('process-contact.php', {
        method: 'POST',
        body: formData,
      });

      const data = await response.text();

    
        setModalContent("Merci pour votre message");
   

      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='SectionAppleStyle' id='Contact'>
      <h2 className='h2'>Me Contacter</h2>
      <article className='ContactContainer'>
        <article className='ContactList'>
          <div className='ContactItem'>
            <a href='https://www.linkedin.com/in/hassan-c-5907a0227/' target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" className='icone' />
              <span className='ContactText'>Linkedin</span>
            </a>
            </div>
            <div className='ContactItem'>
            <a href='mailto:hasscrpt@gmail.com'>
              <FontAwesomeIcon icon={faEnvelope} size="2xl" className='icone' />
              <span className='ContactText'>hasscrpt@gmail.com</span>
            </a>
          </div>
          <div className='ContactItem'>
            <FontAwesomeIcon icon={faPhoneVolume} size="2xl" className='icone' />
              <span className='ContactText'>+31 6 29 48 10 76</span>
          </div>
        </article>
        {/*
        <form className="formulaire" onSubmit={handleSubmit} itemScope itemType="http://schema.org/ContactPoint">
          <div>
            <label className="formulaireSmall" htmlFor="name">Nom</label>
            <input name="name" autoComplete="name" className="formulaireSmall" type="text" id="name" required />
          </div>
          <div>
            <label className="formulaireSmall" htmlFor="email">Email</label>
            <input name="email" autoComplete="email" className="formulaireSmall" type="email" id="email" required />
          </div>
          <div>
            <label className="formulaireBig" htmlFor="message">Message</label>
            <textarea name="message" autoComplete="off" className="formulaireBig" id="message" required></textarea>
          </div>
          <div>
            <button type="submit" className="button">Envoyer</button>
          </div>
        </form>
*/}

      </article>
    </section>
  );
}

export default Contact;