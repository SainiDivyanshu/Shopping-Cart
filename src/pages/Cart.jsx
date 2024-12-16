import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      {cart.length > 0 ? (
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Cart Items */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>
            <div className="flex flex-col gap-4">
              {cart.map((item, index) => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    itemIndex={index}
                  />
                );
              })}
            </div>
          </div>

          {/* Right Section - Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold text-green-600 mb-4">
              Cart Summary
            </h3>
            <div className="text-gray-700 mb-4">
              <p className="mb-2">
                <span className="font-medium">Total Items: </span>
                {cart.length}
              </p>
              <p>
                <span className="font-medium">Total Amount: </span>
                <span className="text-green-600 font-bold">
                  ${totalAmount.toFixed(2)}
                </span>
              </p>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        // Empty Cart Section
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart is Empty</h1>
          <Link to="/">
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
