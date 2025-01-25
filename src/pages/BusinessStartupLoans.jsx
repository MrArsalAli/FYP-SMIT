import React, { useState } from "react";

function BusinessStartupLoans() {
  const [loan, setLoan] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const [breakdown, setBreakdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const calculateBreakdown = (e) => {
    e.preventDefault();

    if (loan > 1000000) {
      alert("Loan amount cannot exceed 1,000,000 PKR.");
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
    const monthlyInstallment = (loanAfterDeposit / 60).toFixed(2); // 60 months for 5 years

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
    // Add your form submission logic here
    console.log("Form submitted");
    setIsPopupOpen(false);
  };

  return (
    <div className="h-screen container mx-auto">
      <h1 className="text-3xl font-bold text-center my-10">
        Business Startup Loans
      </h1>
      <div className="shadow-lg p-4 rounded container mx-auto w-3/6">
        <div className="p-6 max-w-lg mx-auto">
          <form onSubmit={calculateBreakdown}>
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
                <option value="Buy Stall">Buy Stall</option>
                <option value="Advance Rent for Shop">
                  Advance Rent for Shop
                </option>
                <option value="Shop Assets">Shop Assets</option>
                <option value="Shop Machinery">Shop Machinery</option>
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
                id="number"
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
            <div className="mb-4">
              <h1 className="font-bold">Loan Period: 5 years (60 months)</h1>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-emerald-500 text-white px-4 py-2 rounded font-bold hover:bg-emerald-600"
              >
                Calculate Breakdown
              </button>
            </div>
          </form>
          <button
            onClick={openModal}
            className="my-2 bg-emerald-500 text-white px-4 py-2 rounded font-bold hover:bg-emerald-600"
          >
            Proceed
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
                <strong>Remaining Loan:</strong> {breakdown.loanAfterDeposit}{" "}
                PKR
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

          {isOpen && (
            <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/30">
              <div className="bg-white rounded-lg shadow-lg p-6 w-96">
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-gray-800">
                    User Information
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✖
                  </button>
                </div>

                {/* Modal Content */}
                <div className="mt-4">
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        CNIC
                      </label>
                      <input
                        type="text"
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
                        placeholder="Enter Name"
                        className="mt-1 w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusinessStartupLoans;
