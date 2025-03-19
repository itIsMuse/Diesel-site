import { useState } from "react";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    location: "",
    address: "",
  });

  const [pricePerLiter, setPricePerLiter] = useState(""); // State for price per liter
  const [totalCost, setTotalCost] = useState(""); // State for total cost

  const prices = {
    "Agege": 1360,
    "Ajeromi-Ifelodun": 1320,
    "Alimosho": 1400,
    "Amuwo-Odofin": 1350,
    "Badagry": 1500,
    "Epe": 1520,
    "Eti-Osa": 1300,
    "Ibeju-Lekki": 1480,
    "Ifako-Ijaiye": 1380,
    "Ikeja": 1350,
    "Ikorodu": 1460,
    "Kosofe": 1360,
    "Lagos Island": 1280,
    "Lagos Mainland": 1320,
    "Mushin": 1340,
    "Ojo": 1450,
    "Oshodi-Isolo": 1350,
    "Shomolu": 1350,
    "Surulere": 1320
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "location") {
      const price = prices[value] || "";
      setPricePerLiter(price);
      calculateTotal(price, formData.quantity);
    }

    if (name === "quantity") {
      calculateTotal(pricePerLiter, value);
    }
  };

  const calculateTotal = (price, quantity) => {
    const total = price && quantity ? price * quantity : "";
    setTotalCost(total);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Data:", formData, "Price per liter:", pricePerLiter, "Total Cost:", totalCost);
    // Paystack integration will be added here
  };

  return (
    <div className="min-h-screen bg-[#1b1a1a] flex items-center justify-center px-4 m-12 pb-2">
      <div className="bg-white/99 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        {/* Informational Text */}
        <h2 className="text-2xl text-[#1b1a1a] font-bold text-center mb-6">Place Your Order</h2>
        <p className="text-red-500 text-sm text-center font-semibold mt-9k">
          Price per litre varies according to the local government area in Lagos.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
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
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
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
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Location (LGA)</label>
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
              {Object.keys(prices).map((location) => (
                <option key={location} value={location} />
              ))}
            </datalist>
          </div>
          <div>
            <label className="block text-gray-700">Location (specific address)</label>
            <input
              type="text"
              name="address"
              placeholder="2, Ogunlana Drive, Surulere"
              value={formData.address}
              onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100"
              required
            />
          </div>

          {/* Display Price per Liter */}
        

          <button
            type="submit"
            onSubmit={handleSubmit}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Continue
          </button>
          {pricePerLiter && (
            <div className="text-gray-700 font-semibold">
              Price per Liter: <span className="text-yellow-600">₦{pricePerLiter}</span>
            </div>
          )}

          {/* Display Total Cost */}
          {totalCost && (
            <div className="text-gray-700 font-semibold">
              Total Cost: <span className="text-green-600">₦{totalCost}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Order;
