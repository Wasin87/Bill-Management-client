import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";
import { FaTrashAlt } from "react-icons/fa";

const MyPayBills = () => {
  const [myBills, setMyBills] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/payBill")
      .then((res) => res.json())
      .then((data) => setMyBills(data))
      .catch((err) => console.error("Error loading pay bills:", err));
  }, []);

  const totalPaid = myBills.reduce((sum, bill) => sum + Number(bill.amount), 0);

  // ✅ Download PDF
  const handleDownloadPDF = (bill) => {
    const doc = new jsPDF();
    doc.text("Bill Payment Report", 80, 10);
    doc.text(`Title: ${bill.title}`, 20, 30);
    doc.text(`Category: ${bill.category}`, 20, 40);
    doc.text(`Amount: Tk ${bill.amount}`, 20, 50);
    doc.text(`Location: ${bill.location}`, 20, 60);
    doc.text(`Date: ${bill.date}`, 20, 70);
    doc.save(`${bill.title}_Report.pdf`);
  };

  // ✅ Delete Bill
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/payBill/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setMyBills(myBills.filter((bill) => bill._id !== id));
      })
      .catch((err) => console.error("Error deleting bill:", err));
  };

  return (
    <div className="max-w-6xl mx-auto mt-24 mb-12 px-6">
      {/* ✅ Total Amount (TOP STATIC) */}
      <div className="w-full flex flex-col justify-center items-center px-6 py-5 bg-linear-to-r from-amber-300 to-amber-100 dark:from-gray-700 dark:to-gray-800 border border-amber-700 rounded-2xl shadow-md mb-10">
        <p className="font-bold text-2xl text-gray-800 dark:text-white">
          Total Amount Paid
        </p>
        <p className="text-4xl font-extrabold text-amber-700 dark:text-amber-400 mt-2">
          Tk {totalPaid}
        </p>
      </div>

      {/* ✅ Heading */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Pay Bill Details
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Manage, view and download your paid bill reports
        </p>
      </div>

      {/* ✅ Report Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {myBills.map((bill) => (
          <div
            key={bill._id}
            className="bg-amber-50 dark:bg-gray-800 border border-amber-600 rounded-2xl p-5 shadow-md hover:shadow-xl transition-all duration-300"
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {bill.title}
                </h2>

                {/* ✅ Category Tag */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-medium bg-amber-300 text-amber-900 px-3 py-1 rounded-full">
                    {bill.category}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {bill.date}
                  </span>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {bill.location}
                </p>
              </div>
              <p className="text-lg font-bold text-amber-700 dark:text-amber-400">
                Tk {bill.amount}
              </p>
            </div>

            {/* ✅ Action Buttons */}
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => handleDownloadPDF(bill)}
                className="btn btn-sm bg-amber-500 hover:bg-amber-600 text-white shadow-md transition-all duration-200"
              >
                Download PDF
              </button>
              <button
                onClick={() => handleDelete(bill._id)}
                className="btn btn-sm bg-red-500 hover:bg-red-600 text-white flex items-center gap-1 shadow-md transition-all duration-200"
              >
                <FaTrashAlt /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Empty State */}
      {myBills.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-lg">
          No bills found. Please pay a bill to view it here.
        </p>
      )}
    </div>
  );
};

export default MyPayBills;
