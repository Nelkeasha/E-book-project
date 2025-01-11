// TermsOfService.jsx
import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="terms-of-service-page bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800 p-6 md:p-12">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600">
          Please read these Terms of Service carefully before using our website or services. By accessing or using our website, you agree to be bound by these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">General Terms</h2>
        <p className="text-gray-600">
          By using this website, you agree to comply with all applicable laws and regulations. You must not use our services for any unlawful purpose.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Account Responsibility</h2>
        <p className="text-gray-600">
          You are responsible for maintaining the confidentiality of your account information, including your password, and for all activities that occur under your account.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Limitation of Liability</h2>
        <p className="text-gray-600">
          YourStoreName is not liable for any indirect, incidental, or consequential damages that result from using our website or services.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions regarding these Terms of Service, please contact us at <a href="mailto:support@ebook.com" className="text-blue-600">support@ebook.com</a>.
        </p>
        <Link
          to="/privacy"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
        >
          Read Privacy Policy
        </Link>
      </section>
    </div>
  );
};

export default TermsOfService;
