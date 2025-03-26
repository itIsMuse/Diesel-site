import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Order = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    location: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const [pricePerLiter, setPricePerLiter] = useState("");
  const [totalCost, setTotalCost] = useState("");

  const prices = {
    "Agege": 1360, "Ajeromi-Ifelodun": 1320, "Alimosho": 1400, "Amuwo-Odofin": 1350,
    "Badagry": 1500, "Epe": 1520, "Eti-Osa": 1300, "Ibeju-Lekki": 1480, "Ifako-Ijaiye": 1380,
    "Ikeja": 1350, "Ikorodu": 1460, "Kosofe": 1360, "Lagos Island": 1280, "Lagos Mainland": 1320,
    "Mushin": 1340, "Ojo": 1450, "Oshodi-Isolo": 1350, "Shomolu": 1350, "Surulere": 1320
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "location") {
      setPricePerLiter(prices[value] || "");
    }
  };

  useEffect(() => {
    if (pricePerLiter && formData.quantity) {
      setTotalCost(pricePerLiter * parseInt(formData.quantity));
    } else {
      setTotalCost("");
    }
  }, [pricePerLiter, formData.quantity]);

  const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbyyFv9ZBAGx7pZrMfj3NQsB79jUhVoRo_el7Y2lx8ye04PGv3u2F9wdQrlEMcHP4dVZag/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setConfirmation("");
  
    const orderData = { ...formData, totalCost: totalCost.toString() };
  
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });
  
      // ✅ Assume Success (since we can't check response)
      setConfirmation("Your order has been submitted. A confirmation email will be sent to you shortly.");
      setFormData({ name: "", email: "", phone: "", quantity: "", address: "", location: "" });
      setPricePerLiter("");
      setTotalCost("");
    } catch (error) {
      console.error("Error:", error);
      setConfirmation("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="min-h-screen bg-[#1b1a1a] flex items-center justify-center px-4 m-12 pb-2 relative">
      {loading && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <ClipLoader color="#ffffff" size={60} />
        </div>
      )}

      <div className="bg-white/99 p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl text-[#1b1a1a] font-bold text-center mb-6">Place Your Order</h2>
        <p className="text-red-500 text-sm text-center font-semibold">
          Price per litre varies according to the local government area in Lagos.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100" required />
          </div>

          <div>
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100" required />
          </div>

          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100" required />
          </div>

          <div>
            <label className="block text-gray-700">Quantity (Liters)</label>
            <input type="number" name="quantity" value={formData.quantity} onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100" required />
          </div>

          <div>
            <label className="block text-gray-700">Location (LGA)</label>
            <input type="text" name="location" list="locations" value={formData.location} onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100" required />
            <datalist id="locations">
              {Object.keys(prices).map((location) => (
                <option key={location} value={location} />
              ))}
            </datalist>
          </div>

          <div>
            <label className="block text-gray-700">Location (specific address)</label>
            <input type="text" name="address" value={formData.address} onChange={handleChange}
              className="text-gray-900 border-yellow-300 w-full p-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-yellow-100" required />
          </div>

          {pricePerLiter && (
            <div className="text-gray-700 font-semibold">
              Price per Liter: <span className="text-yellow-600">₦{pricePerLiter}</span>
            </div>
          )}

          {totalCost && (
            <div className="text-gray-700 font-semibold">
              Total Cost: <span className="text-green-600">₦{totalCost}</span>
            </div>
          )}

          <button type="submit" className="w-full bg-yellow-500 text-white py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-300">
            Continue
          </button>

          {confirmation && (
            <div className="mt-4 p-3 text-center text-white bg-green-600 rounded-lg">
              {confirmation}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Order;
