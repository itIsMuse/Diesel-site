import React from 'react'; 
// import photo from 'public/assets/3d-render-fuel-pump-nozzle-isolated-color-background.jpg'

const About = () => {
  return (
<section style={{ backgroundImage: `url(${photo})`}} className="bg-[url('/assets/different-fuel-pistols-somewhere-amsterdam-city.jpg')] bg-cover bg-center py-20 text-white">
  <div className="container mx-auto px-6 lg:px-20 bg-black/70 p-10 rounded-lg">
    <h2 className="text-4xl font-bold text-center">About Us — Pride Energy Express</h2>
    <p className="mt-6 text-lg text-gray-200 leading-relaxed">
      At Pride Energy Express, we are committed to powering progress by delivering reliable and efficient diesel distribution services across Nigeria. 
      Specializing in the supply of high-quality diesel to residential, corporate, manufacturing, and industrial locations, we bridge the gap between 
      energy demands and seamless fuel solutions.
    </p>
    
    <p className="mt-4 text-lg text-gray-200 leading-relaxed">
      Our mission is simple: to provide consistent, timely, and cost-effective fuel delivery tailored to the unique needs of our clients. Whether you are a 
      business requiring uninterrupted power supply or a household seeking dependable fuel solutions, Pride Energy Express is your trusted energy partner.
    </p>

    <p className="mt-4 text-lg text-gray-200 leading-relaxed">
      What sets us apart is our unwavering dedication to customer satisfaction, transparency, and operational excellence. We understand the critical role energy 
      plays in driving productivity, which is why we prioritize swift logistics, safe handling, and top-tier service at every touchpoint.
    </p>

    <p className="mt-4 text-lg text-gray-200 leading-relaxed font-semibold">
      At Pride Energy Express, we don’t just supply diesel — we deliver energy solutions that keep your world running.
    </p>
  </div>
</section>
  );
};

export default About;


