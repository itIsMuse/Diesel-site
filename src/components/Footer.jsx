import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white">Diesel Direct</h2>
          <p className="mt-2 text-sm">
            Providing high-quality diesel with fast and reliable delivery services to homes and businesses.
          </p>
        </div>
  
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
            <li><Link to="/order" className="hover:text-yellow-500">Order Diesel</Link></li>
            <li><Link to="/about" className="hover:text-yellow-500">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
          </ul>
        </div>
  
        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <p className="mt-2 text-sm">📍 Lagos, Nigeria</p>
          <p className="text-sm">📞 +234 123 456 7890</p>
          <p className="text-sm">✉ support@dieseldirect.com</p>
        </div>
        
      </div>
  
      {/* Copyright */}
      <div className="text-center mt-8 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Diesel Direct. All Rights Reserved.
      </div>
    </footer>
    );
  };
  
  export default Footer;