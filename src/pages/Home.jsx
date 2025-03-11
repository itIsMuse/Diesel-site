import React from 'react'

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
    {/* Hero Section */}
    <section className="bg-cover bg-center h-[80vh] flex items-center justify-center text-white text-center" style={{ backgroundImage: "url(src/assets/different-fuel-pistols-somewhere-amsterdam-city.jpg)" }}>
    <div className="mt-20 p-6 rounded-lg bg-black sm:bg-[url(src/assets/your-image.jpg/different-fuel-pistols-somewhere-amsterdam-city.jpg)] sm:bg-opacity-90">

        <h1 className="text-4xl  font-bold">Quality Diesel at Your Doorstep</h1>
        <p className="mt-4 text-lg ">Reliable, prompt, and premium fuel delivery services.</p>
        <a href="/order" className="mt-6 inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600">Order Now</a>
      </div>
    </section>

    {/* About Section */}
    <section className="py-16 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-bold">Your Trusted Diesel Supplier</h2>
      <p className="mt-4 text-lg">We provide high-quality diesel to businesses and homes with efficient, on-time delivery services.</p>
    </section>

    {/* Features Section */}
    <section className="py-16 bg-gray-200 text-center px-6 md:px-16">
      <h2 className="text-3xl font-bold">Why Choose Us?</h2>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold">Prompt Delivery</h3>
          <p className="mt-2">We ensure timely delivery to your location, hassle-free.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold">Competitive Pricing</h3>
          <p className="mt-2">Get the best rates on high-quality diesel fuel.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold">24/7 Customer Support</h3>
          <p className="mt-2">We’re here to assist you anytime, anywhere.</p>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Home
