import { useState } from "react";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    quantity: "",
    location: "",
    address: "",
  });

  const [pricePerLiter, setPricePerLiter] = useState(""); // State for price per liter
  const [totalCost, setTotalCost] = useState(""); // State for total cost

  const prices = {
    "Agege": 800,
    "Ajeromi-Ifelodun": 850,
    "Alimosho": 820,
    "Amuwo-Odofin": 870,
    "Badagry": 880,
    "Epe": 890,
    "Eti-Osa": 860,
    "Ibeju-Lekki": 900,
    "Ifako-Ijaiye": 810,
    "Ikeja": 830,
    "Ikorodu": 870,
    "Kosofe": 840,
    "Lagos Island": 860,
    "Lagos Mainland": 850,
    "Mushin": 820,
    "Ojo": 880,
    "Oshodi-Isolo": 830,
    "Shomolu": 840,
    "Surulere": 830
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        {/* Informational Text */}
        <p className="text-red-600 text-sm text-center font-semibold mt-9">
          Price per litre varies according to the local government area in Lagos.
        </p>

        <h2 className="text-2xl font-bold text-center mb-6">Place Your Order</h2>
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

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
