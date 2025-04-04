import React from 'react'; 
// import photo from 'public/assets/3d-render-fuel-pump-nozzle-isolated-color-background.jpg'

const About = () => {
  return (
<section className="bg-[url('/assets/IMG_1994.PNG')] bg-cover bg-center bg-no-repeat py-20 text-white">
  <div className="container mx-auto px-6 lg:px-20 bg-black/70 p-10 rounded-lg">
    <h2 className="text-4xl font-bold text-center">About Us — Pride Energy Express</h2>
    
    <div className="mt-6 text-lg text-gray-200 leading-relaxed">
      <h3 className="text-2xl font-semibold mb-4">Quality Assurance of Our Diesel (AGO) - Product Specification:</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="font-bold">Density:</div>
        <div>8.45 – 8.60 g/ml</div>
        <div className="font-bold">Viscosity (at 40 °C):</div>
        <div>4.5 – 4.6</div>
        <div className="font-bold">Flash Point:</div>
        <div>74 – 80°C</div>
        <div className="font-bold">Cetane Number:</div>
        <div>47 – 52</div>
        <div className="font-bold">Sulphur Content:</div>
        <div>0.0516</div>
        <div className="font-bold">Water Content:</div>
        <div>Nil</div>
        <div className="font-bold">Colour:</div>
        <div>Pale Yellow</div>
        <div className="font-bold">Appearance:</div>
        <div>Clear & Bright</div>
      </div>
    </div>

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


