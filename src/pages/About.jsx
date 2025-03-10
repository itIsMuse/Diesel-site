import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-[50vh] flex mt-10 items-center justify-center text-white text-center" style={{ backgroundImage: "url('/about-hero.jpg')" }}>
        <div className="bg-black bg-opacity-50 mt-20 p-10 rounded-lg">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-lg">Providing reliable diesel supply with excellence.</p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold">Who We Are</h2>
        <p className="mt-4 text-lg">We are a trusted diesel supplier, dedicated to delivering high-quality fuel promptly to homes and businesses.</p>
      </section>
      
      {/* Our Mission & Vision */}
      <section className="py-16 bg-gray-200 text-center px-6 md:px-16">
        <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-2">To ensure seamless diesel supply with efficiency, affordability, and exceptional customer service.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="mt-2">To be the most reliable and customer-focused diesel supplier in the industry.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

