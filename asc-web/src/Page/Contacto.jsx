import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { AiOutlineMail, AiOutlineUser, AiOutlineMessage } from 'react-icons/ai';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const USER_ID = 'tu_user_id';
    const TEMPLATE_ID = 'tu_template_id';

    emailjs.sendForm('service_your_service_id', TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log('Formulario enviado correctamente', result.text);
        setFeedbackMessage('¡Formulario enviado correctamente!');
        setIsLoading(false);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error('Error al enviar el formulario', error.text);
        setFeedbackMessage('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nombre</label>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <AiOutlineUser className="mr-2 text-gray-500" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
              className="flex-1 focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Correo electrónico</label>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <AiOutlineMail className="mr-2 text-gray-500" />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Correo electrónico"
              value={formData.email}
              onChange={handleChange}
              className="flex-1 focus:outline-none"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensaje</label>
          <div className="flex items-center border border-gray-300 rounded-md p-2">
            <AiOutlineMessage className="mr-2 text-gray-500" />
            <textarea
              id="message"
              name="message"
              placeholder="Mensaje"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="flex-1 focus:outline-none"
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className={`inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full transition-colors duration-300 ${isLoading ? 'cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar'}
        </button>
        {feedbackMessage && (
          <p className="mt-4 text-center text-lg font-medium">{feedbackMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
