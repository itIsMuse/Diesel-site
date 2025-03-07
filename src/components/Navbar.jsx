import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link to="/" className="text-2xl font-bold text-gray-900">Diesel Direct</Link>
        <ul className="hidden md:flex space-x-6">
          <li><Link to="/" className="text-gray-700 hover:text-yellow-500">Home</Link></li>
          <li><Link to="/about" className="text-gray-700 hover:text-yellow-500">About</Link></li>
          <li><Link to="/order" className="text-gray-700 hover:text-yellow-500">Order</Link></li>
          <li><Link to="/contact" className="text-gray-700 hover:text-yellow-500">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;