import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
  {/* Merged Hero & About Section */}
  <section 
    className="bg-cover bg-center min-h-[90vh] flex flex-col items-center justify-center text-white text-center px-6 py-16" 
    style={{ backgroundImage: "url(/assets/3d-render-fuel-pump-nozzle-isolated-color-backgroun.jpg)" }}
  >
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
    backgroundImage: "url(/assets/IMG_1997.JPG)",
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
  </div>
  )
}

export default Home
