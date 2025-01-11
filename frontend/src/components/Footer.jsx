import footerLogo from "../assets/footer-logo.png";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail(""); // Reset email after submission
      alert("Thank you for subscribing!");
      // Add your API call here to save the email
    } else {
      alert("Please enter a valid email address.");
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Left Side - Logo and Nav */}
        <div className="md:w-1/2 w-full">
          <img src={footerLogo} alt="Logo" className="mb-5 w-36" />
          <ul className="flex flex-col md:flex-row gap-4">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Side - Newsletter */}
        <div className="md:w-1/2 w-full">
          {isSubscribed ? (
            <p className="text-green-500 font-semibold">
              You're subscribed! Thank you for joining our newsletter.
            </p>
          ) : (
            <>
              <p className="mb-4">
                Subscribe to our newsletter to receive the latest updates, news,
                and offers!
              </p>
              <form onSubmit={handleSubmit} className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-l-md text-black"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary px-6 py-2 rounded-r-md hover:bg-primary-dark"
                >
                  Subscribe
                </button>
              </form>
            </>
          )}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        {/* Left Side - Privacy Links */}
        <ul className="flex gap-6 mb-4 md:mb-0">
          <li>
            <Link to="/privacy" className="hover:text-primary">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:text-primary">
              Terms of Service
            </Link>
          </li>
        </ul>

        {/* Right Side - Social Icons */}
        <div className="flex gap-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
      <div><center>© 2023 EBook.org. All rights reserved</center></div>
    </footer>
  );
};

export default Footer;
