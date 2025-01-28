import axios from "axios";
import React, { useState } from "react";
import { AppRoutes } from "../constant/constant";

function HomeConstructionLoans() {
  const [loan, setLoan] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [breakdown, setBreakdown] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const calculateBreakdown = (e) => {
    openModal();
    e.preventDefault();

    let Loan = parseFloat(loan);
    let Deposit = parseFloat(deposit);
    if (Loan > 1000000) {
      alert("Loan amount cannot exceed 1,000,000 PKR.");
      return;
    }
    if (Loan <= 0 || Deposit <= 0) {
      alert("Please enter valid loan and deposit amounts.");
      return;
    }
    if (Deposit >= Loan) {
      alert(
        "Initial deposit cannot be equal to or greater than the loan amount."
      );
      return;
    }

    const loanAfterDeposit = Loan - Deposit;
    const monthlyInstallment = (loanAfterDeposit / 60).toFixed(2); // 60 months for 5 years

    setBreakdown({
      loan: Loan,
      deposit: Deposit,
      loanAfterDeposit,
      monthlyInstallment,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const generateRandomPassword = () => {
      return Math.random().toString(36).slice(-8); // Random 8 character password
    };
    const pass = generateRandomPassword();

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
  };

  return (
    <div className="min-h-screen container mx-auto">
      <h1 className="text-3xl font-bold text-center my-10">
        Home Construction Loans
      </h1>
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
                <option value="Stucture">Stucture</option>
                <option value="Finishing">Finishing</option>
                <option value="Loan">Loan</option>
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
                placeholder="Max 1,000,000 PKR"
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
            <div className="mb-2">
              <h1 className="font-bold">Loan Period: 5 years (60 months)</h1>
            </div>
            <button
              onClick={calculateBreakdown}
              className="cursor-pointer bg-emerald-500 text-white px-4 py-2 rounded font-bold hover:bg-emerald-600"
            >
              calculateBreakdown
            </button>
            <div className="flex items-center justify-between"></div>
            <div>
              <h1 className="font-bold text-3xl text-center">User Info</h1>
              <p className="text-xs text-center">if interested</p>
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
              className="my-2 cursor-pointer bg-emerald-500 text-white px-4 py-2 rounded font-bold hover:bg-emerald-600"
            >
              Proceed
            </button>
          </form>

          {isModalOpen && (
            <div className="fixed inset-0 bg-opacity-80 flex justify-center items-center z-50">
              <div className="bg-gray-50 w-full shadow-lg md:w-3/5 lg:w-5/12 rounded-lg p-6 mx-6 ">
                <div className="flex justify-between">
                  <h1 className="text-xl font-bold mb-4">Loan Breakdown</h1>
                  <span
                    onClick={closeModal}
                    className="flex flex-end cursor-pointer text-2xl"
                  >
                    X
                  </span>
                </div>
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
                      <strong>Total Months:</strong> 60
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeConstructionLoans;
