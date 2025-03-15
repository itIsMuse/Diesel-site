import { useState } from "react";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: "",
    location: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data:", formData);
    // Paystack integration will be added here
  };

  urn (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Place Your Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-gray-900 border-yellow-300  w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="text-gray-900 border-yellow-300  w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Quantity (Liters)</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="text-gray-900 border-yellow-300  w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Location</label>
            <input
  type="text"
  name="location"
  list="locations"
  value={formData.location}
  onChange={handleChange}
  className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
  required
/>

<datalist id="locations">
  <option value="Agege" />
  <option value="Ajeromi-Ifelodun" />
  <option value="Alimosho" />
  <option value="Amuwo-Odofin" />
  <option value="Badagry" />
  <option value="Epe" />
  <option value="Eti-Osa" />
  <option value="Ibeju-Lekki" />
  <option value="Ifako-Ijaiye" />
  <option value="Ikeja" />
  <option value="Ikorodu" />
  <option value="Kosofe" />
  <option value="Lagos Island" />
  <option value="Lagos Mainland" />
  <option value="Mushin" />
  <option value="Ojo" />
  <option value="Oshodi-Isolo" />
  <option value="Shomolu" />
  <option value="Surulere" />
</datalist>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
            onSubmit={handleSubmit}
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;

