import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";  
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Data:", formData);
    // Backend API integration for contact form submission
  };

  return (
    <div className="min-h-screen bg-[#1b1a1a] flex items-center justify-center px-4 my-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-gray-800 w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-gray-800 w-full p-3 border border-yellow-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-lg">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="text-gray-800 w-full border border-yellow-500 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 text-lg h-32"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-3 rounded-lg font-semibold text-lg hover:bg-yellow-600 transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-8 text-center">
          <h3 className="text-xl font-semibold text-gray-700 mb-3">Follow Us</h3>
          <div className="flex justify-center space-x-6 text-yellow-500 text-2xl">
            <Link href="#" className="hover:text-yellow-600 transition duration-300">
              <FaFacebook />
            </Link>
            <a href="#" className="hover:text-yellow-600 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-600 transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-600 transition duration-300">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
