import React, { useState } from 'react';

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

      if (data === 'success') {
        setModalContent("Votre message a été envoyé avec succès.");
      } else {
        setModalContent("Une erreur s'est produite lors de l'envoi du message.");
      }

      setShowModal(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className='SectionAppleStyle' id='Contact'>
      <h2 className='h2'>Me Contacter</h2>
      <form className="formulaire" onSubmit={handleSubmit} itemScope itemType="http://schema.org/ContactPoint">
        <div>
          <label className="formulaireSmall" htmlFor="name">Nom</label>
          <input name="name" autoComplete="name" className="formulaireSmall"  type="text" id="name" required />
        </div>
        <div>
          <label className="formulaireSmall" htmlFor="email">Email</label>
          <input name="email" autoComplete="email" className="formulaireSmall"  type="email" id="email" required />
        </div>
        <div>
          <label className="formulaireBig" htmlFor="message">Message</label>
          <textarea name="message" autoComplete="off" className="formulaireBig" id="message" required></textarea>
        </div>
        <div>
          <button type="submit" className="button">Envoyer</button>
        </div>
      </form>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;