import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="w-20 h-20"><img src="src/assets/oie_jx2oGHsG46Oh.png" alt="logo" /></Link>
        
        {/* Hamburger Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900 text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-gray-400 hover:text-yellow-500">Home</Link></li>
          <li><Link to="/about" className="text-gray-400 hover:text-yellow-500">About</Link></li>
          <li><Link to="/order" className="text-gray-400 hover:text-yellow-500">Order</Link></li>
          <li><Link to="/contact" className="text-gray-400 hover:text-yellow-500">Contact</Link></li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-transparent bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl text-gray-900">
          <FiX />
        </button>
        <ul className="mt-16 space-y-6 text-center">
          <li><Link to="/" className="block py-3 text-[#f04642] hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="block py-3 text-gray-700 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/order" className="block py-3 text-gray-700 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Order</Link></li>
          <li><Link to="/contact" className="block py-3 text-gray-700 hover:text-yellow-500" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
