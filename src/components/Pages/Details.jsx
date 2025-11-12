import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bill = location.state?.bill;

  if (!bill) {
    
    navigate("/", { replace: true });
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen   px-4">
      <div className="bg-amber-50 dark:bg-gray-800 border border-amber-300 dark:border-gray-700 shadow-lg rounded-3xl max-w-2xl w-full p-8">
        <img
          className="w-full h-64 md:h-80 object-cover rounded-2xl mb-6"
          src={bill.image}
          alt={bill.title}
        />

        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {bill.title}
          </h2>
          <span className="text-xs bg-amber-300 text-amber-900 px-3 py-1 rounded-full">
            {bill.category}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-200 mb-2">
          <span className="font-semibold">Location: </span>
          {bill.location}
        </p>

        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {bill.description}
        </p>

        <div className="flex justify-between items-center border-t border-gray-300 dark:border-gray-700 pt-4">
          <p className="text-gray-800 dark:text-gray-200 font-semibold">
            Amount: ৳{bill.amount}
          </p>
          <p className="text-gray-500 text-sm dark:text-gray-400">{bill.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Details;
