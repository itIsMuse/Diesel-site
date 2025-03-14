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
      <source src="/assets/AZMT Motor Oil _1741953012.975178.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    {/* Hero Content */}
    <div className="relative mt-20 mb-5 p-6 rounded-lg bg-black/60">

      <h1 className="text-4xl font-bold">Quality Diesel at Your Doorstep</h1>
      <p className="mt-4 text-lg">Reliable, prompt, and premium fuel delivery services.</p>
      <Link to="/order" className="mt-6 inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">
        Order Now
      </Link>
    </div>
  </section>

  {/* About Section with Background Image */}
  <section 
    className=" mt-10 relative min-h-[70vh] flex flex-col items-center justify-center text-white text-center px-6 py-16 pt-10 "
    style={{
      backgroundImage: "url(/assets/IMG_2042.JPG)",
      backgroundSize: "cover",      // Ensures the image covers the entire section
      backgroundPosition: "center", // Centers the image
      backgroundRepeat: "no-repeat" // Prevents repeating
    }} // Change this to your desired image
  >
    <div className="relative p-6 rounded-lg bg-black/60">
      <h2 className="text-3xl font-bold p-5">Your Trusted Diesel Supplier</h2>
      <p className="mt-4 text-lg">
        We provide high-quality diesel to businesses and homes with efficient, on-time delivery services.
      </p>
    </div>
  </section>


    {/* Features Section */}
    <section  style={{
    backgroundImage: "url(/assets/IMG_1997.JPG)",
    backgroundSize: "cover",      // Ensures the image covers the entire section
    backgroundPosition: "center", // Centers the image
    backgroundRepeat: "no-repeat" // Prevents repeating
  }}className="py-16 bg-[#fdfa0f]/90 text-center px-6 md:px-16 mt-10 mb-10">
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
