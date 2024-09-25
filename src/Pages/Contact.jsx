import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    feedback: '',
  });

  const [status, setStatus] = useState('');

  // Initialize EmailJS with your public key
  useEffect(() => {
    emailjs.init("dUmQGfAQvaJXvPcFG"); // Replace with your actual public key
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_asan',  // Replace with your EmailJS service ID
      'template_asan', // Replace with your EmailJS template ID
      formData
    )
    .then((result) => {
      console.log(result.text);
      setStatus('SUCCESS');
      setFormData({ name: '', feedback: '' });
    })
    .catch((error) => {
      console.log(error.text);
      setStatus('FAILED');
    });
  };

  return (
    <div className="bg-gray-100 py-10 px-6 flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full z-40">
        <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
        <form onSubmit={sendEmail}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md text-gray-700"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="feedback">
              Feedback
            </label>
            <textarea
              name="feedback"
              value={formData.feedback}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md text-gray-700"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Send Feedback
          </button>
          {status === 'SUCCESS' && <p className="text-green-500 mt-4">Feedback sent successfully!</p>}
          {status === 'FAILED' && <p className="text-red-500 mt-4">Failed to send feedback. Please try again.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
