import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 ">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-3">About Teeath Services</h3>
          <p className="text-sm">
            Teeath Services provides high-quality dental treatments tailored to your needs. 
            Our professional team is committed to ensuring your comfort and satisfaction.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul>
            <li className="mb-2">
              <a href="/" className="hover:underline">Home</a>
            </li>
            <li className="mb-2">
              <a href="/alltreatment" className="hover:underline">All Treatments</a>
            </li>
            <li className="mb-2">
              <a href="/myappoinment" className="hover:underline">My Appointments</a>
            </li>
            <li className="mb-2">
              <a href="/profile" className="hover:underline">Profile</a>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-bold mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              className="text-white text-2xl hover:text-blue-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="text-white text-2xl hover:text-blue-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="text-white text-2xl hover:text-pink-500 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white text-2xl hover:text-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Dev Rabbani.2024 All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer; 
