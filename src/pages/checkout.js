"use client";

import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Checkout() {
  const { cart, setCart } = useCart();
  const router = useRouter();
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrderSubmit = async () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      alert("Please fill in all fields");
      return;
    }

    // Отправляем данные на сервер для отправки email
    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ customerInfo, cart }),
    });

    if (response.ok) {
      // Очищаем корзину после успешной отправки
      setCart([]);
      alert("Order placed successfully! Check your email for details.");
      router.push("/"); // Перенаправление на главную страницу
    } else {
      alert("Failed to place order. Please try again.");
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center p-2 border-b">
                <span>{item.name} x {item.quantity}</span>
                <span>${item.totalPrice}</span>
              </li>
            ))}
          </ul>
          <h2 className="text-lg font-bold mb-4">Total: ${totalPrice}</h2>
          <h2 className="text-lg font-bold mb-4">Customer Information</h2>
          <div className="mb-4">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              name="name"
              value={customerInfo.name}
              onChange={handleInputChange}
              className="border px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Email:</label>
            <input
              type="email"
              name="email"
              value={customerInfo.email}
              onChange={handleInputChange}
              className="border px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Address:</label>
            <input
              type="text"
              name="address"
              value={customerInfo.address}
              onChange={handleInputChange}
              className="border px-2 py-1 w-full"
            />
          </div>
          <button
            onClick={handleOrderSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Place Order
          </button>
        </div>
      )}
    </div>
  );
}
