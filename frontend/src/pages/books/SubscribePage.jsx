import React from 'react'
// src/pages/SubscribePage.jsx
import { useState } from "react";

const SubscribePage = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail(""); // Reset email after submission
      // You can add API call here to save the email to the database or a mailing list
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 py-16">
      <h1 className="text-3xl font-bold mb-6 text-center">Subscribe to Our Newsletter</h1>
      {!isSubscribed ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-lg">Stay updated with the latest book releases, news, and special offers!</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Subscribe Now
          </button>
        </form>
      ) : (
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-green-500">Thank you for subscribing!</h2>
          <p className="mt-4 text-lg">We will keep you updated on the latest book releases.</p>
        </div>
      )}
    </div>
  );
};

export default SubscribePage;
