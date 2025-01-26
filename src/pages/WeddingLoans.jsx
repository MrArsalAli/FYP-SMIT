import axios from "axios";
import React, { useState } from "react";
import { AppRoutes } from "../constant/constant";

function WeddingLoans() {
  const [loan, setLoan] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [category, setCategory] = useState("");
  const [breakdown, setBreakdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const calculateBreakdown = (e) => {
    e.preventDefault();

    console.log(e.target.category.value);

    if (loan > 500000) {
      alert("Loan amount cannot exceed 500,000 PKR.");
      return;
    }
    if (loan <= 0 || deposit <= 0) {
      alert("Please enter valid loan and deposit amounts.");
      return;
    }
    if (deposit >= loan) {
      alert(
        "Initial deposit cannot be equal to or greater than the loan amount."
      );
      return;
    }

    // Subtract the deposit from the loan
    const loanAfterDeposit = loan - deposit;

    // Calculate the monthly installment based on the remaining loan amount
    const monthlyInstallment = (loanAfterDeposit / 36).toFixed(2); // 36 months for 3 years

    setBreakdown({
      loan: parseFloat(loan),
      deposit: parseFloat(deposit),
      loanAfterDeposit,
      monthlyInstallment,
    });
  };

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.email.value);

    const generateRandomPassword = () => {
      return Math.random().toString(36).slice(-8); // Random 8 character password
    };
    const pass = generateRandomPassword();

    try {
      const obj = {
        cnic: e.target.cnic.value,
        email: e.target.email.value,
        password: pass,
        name: e.target.name.value,
        category: e.target.category.value,
        loan: e.target.loan.value,
        initialdeposit: e.target.deposit.value,
      };

      axios
        .post(AppRoutes.requests, obj)
        .then((res) => {
          console.log(res);
          alert(
            "Your Account is Made.Please Verify your account from your gmail"
          );
        })
        .catch((err) => console.log(err.message));
    } catch (error) {}

    console.log("Form submitted");
    setIsPopupOpen(false);
  };

  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="text-3xl font-bold text-center my-10">WeddingLoans</h1>
      <div className="shadow-lg p-4 rounded container mx-auto w-3/6">
        <div className="p-6 max-w-lg mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Subcategories
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 capitalize text-medium rounded focus:ring-emerald-500 focus:border-emerald-500 block w-full p-2.5"
                name="category"
                id="category"
              >
                <option value="Valima">Valima</option>
                <option value="Furniture">Furniture</option>
                <option value="Valima Food">Valima Food</option>
                <option value="Jahez">Jahez</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="number"
              >
                Loan
              </label>
              <input
                type="number"
                id="loan"
                name="number"
                placeholder="Max 500,000 PKR"
                className="bg-gray-50 border border-gray-300 text-gray-900 capitalize text-base rounded focus:ring-emerald-500 focus:border-emerald-500 w-full p-2.5"
                value={loan}
                onChange={(e) => setLoan(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="deposit"
              >
                Initial Deposit
              </label>
              <input
                type="number"
                id="deposit"
                name="deposit"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded focus:ring-emerald-500 focus:border-emerald-500 w-full p-2.5"
                value={deposit}
                onChange={(e) => setDeposit(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <h1 className="font-bold">Loan Period: 3 years (36 months)</h1>
            </div>
            <div className="flex items-center justify-between"></div>
            <div>
              <h1 className="font-bold text-3xl text-center">User Info</h1>
              <label className="block text-sm font-medium text-gray-700">
                CNIC
              </label>
              <input
                type="number"
                id="cnic"
                placeholder="Enter CNIC"
                className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="my-2 bg-emerald-500 text-white px-4 py-2 rounded font-bold hover:bg-emerald-600"
            >
              Proceed
            </button>
          </form>
          <button
            onClick={calculateBreakdown}
            className="my-2 bg-emerald-500 text-white px-4 py-2 rounded font-bold hover:bg-emerald-600"
          >
            calculateBreakdown
          </button>

          {breakdown && (
            <div className="mt-6 p-4 border rounded bg-gray-50">
              <h2 className="text-xl font-bold mb-4">Loan Breakdown</h2>
              <p>
                <strong>Loan Amount:</strong> {breakdown.loan} PKR
              </p>
              <p>
                <strong>Initial Deposit:</strong> {breakdown.deposit} PKR
              </p>
              <p>
                <strong>Monthly Installment:</strong>{" "}
                {breakdown.monthlyInstallment} PKR
              </p>
              <p>
                <strong>Total Months:</strong> 36
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default WeddingLoans;
