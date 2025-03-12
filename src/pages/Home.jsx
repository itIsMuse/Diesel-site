import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-transparent text-gray-900">
  {/* Merged Hero & About Section */}
  <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-white text-center px-6 py-16 mt-10">
    
    {/* Background Video */}
    <video 
      autoPlay 
      loop 
      muted 
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover -z-10"
    >
      <source src="/assets/diesel.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Hero Section */}
    <div className="mt-20 p-6 rounded-lg bg-black/60">
      <h1 className="text-4xl font-bold">Quality Diesel at Your Doorstep</h1>
      <p className="mt-4 text-lg">Reliable, prompt, and premium fuel delivery services.</p>
      <Link to="/order" className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
        Order Now
      </Link>
    </div>

    {/* About Section */}
    <div className="py-16 px-6 mt-5 rounded-md md:px-16 text-center bg-black/50">
      <h2 className="text-3xl font-bold p-5 text-white">Your Trusted Diesel Supplier</h2>
      <p className="mt-4 text-lg">
        We provide high-quality diesel to businesses and homes with efficient, on-time delivery services.
      </p>
    </div>
  </section>


    {/* Features Section */}
    <section style={{
    backgroundImage: "url(assets/3d-render-fuel-pump-nozzle-isolated-color-backgroun.jpg)",
    backgroundSize: "cover",      // Ensures the image covers the entire section
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat" // Prevents repeating
  }}className="py-16 bg-[#fdfa0f]/90 text-center px-6 md:px-16">
      <h2 className="text-3xl font-bold ">Why Choose Us?</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/60 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold">Prompt Delivery</h3>
          <p className="mt-2">We ensure timely delivery to your location, hassle-free.</p>
        </div>
        <div className="bg-white/60 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold">Competitive Pricing</h3>
          <p className="mt-2">Get the best rates on high-quality diesel fuel.</p>
        </div>
        <div className="bg-white/60 p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold">24/7 Customer Support</h3>
          <p className="mt-2">We're here to assist you anytime, anywhere.</p>
        </div>
      </div>
    </section>

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
  </div>
  )
}

export default Home
