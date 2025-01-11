import React, { useState } from 'react';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Thank you for reaching out! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      className="flex justify-center items-center min-h-screen"
      style={{ background: '#826afb' }}
    >
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md text-gray-800"
        style={{ margin: '25px' }}
      >
        <h2 className="text-center text-2xl font-semibold mb-6">Contact Us</h2>

        <div className="input-box mb-4">
          <label className="block mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
            className="field w-full h-12 border-2 border-gray-300 rounded-md p-3 text-base focus:outline-none"
          />
        </div>

        <div className="input-box mb-4">
          <label className="block mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="field w-full h-12 border-2 border-gray-300 rounded-md p-3 text-base focus:outline-none"
          />
        </div>

        <div className="input-box mb-4">
          <label className="block mb-2">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
            className="field w-full h-48 border-2 border-gray-300 rounded-md p-3 text-base focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full h-14 bg-purple-600 text-white text-lg font-medium rounded-md shadow-lg hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>

        {formStatus && (
          <p className="form-status text-center mt-4 text-green-600">
            {formStatus}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactUs;
