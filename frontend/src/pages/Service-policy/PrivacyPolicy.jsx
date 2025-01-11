import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800 p-6 md:p-12">
      <section className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600">
          Ebook is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website or use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Information We Collect</h2>
        <p className="text-gray-600">
          We collect personal information such as your name, email address, shipping address, and payment information when you make a purchase or sign up for an account. We also collect non-personal information such as browsing history and device information for analytics.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">How We Use Your Information</h2>
        <p className="text-gray-600">
          We use the information we collect to process orders, improve our services, communicate with you about your account or purchases, and personalize your shopping experience. We may also use your information to send promotional materials if you've opted in.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Data Security</h2>
        <p className="text-gray-600">
          We take reasonable precautions to protect your personal information from unauthorized access, alteration, or destruction. We use secure encryption methods to process payment transactions.
        </p>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          If you have any questions about this Privacy Policy or our data practices, please contact us at <a href="mailto:support@ebook.com" className="text-blue-600">support@ebook.com</a>.
        </p>
        <Link
          to="/service"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
        >
          Read Terms of Service
        </Link>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
