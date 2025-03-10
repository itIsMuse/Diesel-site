import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <NavLink to="/" className="w-20 h-20">
          <img src="src/assets/oie_jx2oGHsG46Oh.png" alt="logo" />
        </NavLink>
        
        {/* Hamburger Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-900 text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "text-yellow-500 font-bold" : "text-gray-900 hover:text-yellow-500"}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-yellow-500 font-bold" : "text-gray-900 hover:text-yellow-500"}>About</NavLink></li>
          <li><NavLink to="/order" className={({ isActive }) => isActive ? "text-yellow-500 font-bold" : "text-gray-900 hover:text-yellow-500"}>Order</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-yellow-500 font-bold" : "text-gray-900 hover:text-yellow-500"}>Contact</NavLink></li>
        </ul>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-transparent bg-opacity-50 transition-opacity duration-300 ease-in-out md:hidden ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMenuOpen(false)}
      ></div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-4 text-2xl text-gray-900">
          <FiX />
        </button>
        <ul className="mt-16 space-y-6 text-center">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "block py-3 text-yellow-500 font-bold" : "block py-3 text-gray-700 hover:text-yellow-500"} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? "block py-3 text-yellow-500 font-bold" : "block py-3 text-gray-700 hover:text-yellow-500"} onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/order" className={({ isActive }) => isActive ? "block py-3 text-yellow-500 font-bold" : "block py-3 text-gray-700 hover:text-yellow-500"} onClick={() => setMenuOpen(false)}>Order</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "block py-3 text-yellow-500 font-bold" : "block py-3 text-gray-700 hover:text-yellow-500"} onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
