// AboutUs.jsx
import React from "react";
import { Link } from "react-router-dom";
// Updated Heroicons v2 imports
import { BookOpenIcon, GlobeAltIcon, UserGroupIcon, HeartIcon } from "@heroicons/react/24/outline";

const AboutUs = () => {
  return (
    <div className="about-us-page bg-gradient-to-r from-blue-50 via-white to-blue-50 text-gray-800 p-6 md:p-12">
      <section className="about-header text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to E-Book, your one-stop destination for everything books! We are passionate about connecting readers with stories that inspire, educate, and entertain.
        </p>
      </section>

      <section className="our-story text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Story</h2>
        <p className="text-gray-600">
          Established in 2024, YourStoreName began as a small bookstore with a big dream—to make books accessible to everyone, everywhere. Over the years, we have grown into a thriving online store, bringing the joy of reading to millions of book lovers around the world.
        </p>
      </section>

      <section className="mission-values grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to promote the love of reading by providing a wide range of books, from bestsellers to rare finds, all while supporting independent authors and publishers.
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Our Values</h2>
          <ul className="text-gray-600 list-disc list-inside">
            <li><strong>Inclusivity:</strong> Books for every reader.</li>
            <li><strong>Quality:</strong> Carefully curated collections.</li>
            <li><strong>Sustainability:</strong> Eco-friendly practices.</li>
            <li><strong>Community:</strong> Supporting local authors and readers.</li>
          </ul>
        </div>
      </section>

      <section className="team-section text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Meet Our Team</h2>
        <p className="text-gray-600">
          Behind E-Book is a team of dedicated book enthusiasts who believe in the transformative power of stories. We are here to assist you every step of the way, from finding the perfect book to ensuring seamless delivery.
        </p>
      </section>

      <section className="call-to-action text-center">
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Join Our Journey</h2>
        <p className="text-gray-600 mb-6">
          Whether you're an avid reader, a casual browser, or someone looking for the perfect gift, YourStoreName is here for you. Thank you for making us a part of your story!
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700"
        >
          <BookOpenIcon className="h-6 w-6 mr-2" />
          Explore Now
        </Link>
      </section>
    </div>
  );
};

export default AboutUs;
