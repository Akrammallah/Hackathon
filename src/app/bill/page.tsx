import React from "react";
import BillingInfo from "@/app/componants/BillingInfo";
import RentalInfo from "@/app/componants/RentalInfo";
import PaymentMethod from "@/app/componants/PaymentMethod";
import Confirmation from "@/app/componants/Confirmation";

const bill: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6" id="bill">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <BillingInfo />
          <RentalInfo />
          <PaymentMethod />
          <Confirmation />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Rental Summary</h2>
            <img src="/car-image.png" alt="Car" className="w-full rounded-lg mb-4" />
            <p className="text-gray-600">Nissan GT - R</p>
            <p className="text-sm text-gray-500">440+ Reviewers</p>
            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Subtotal</span>
                <span>$80.00</span>
              </div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Tax</span>
                <span>$0</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800 mt-2">
                <span>Total Rental Price</span>
                <span>$80.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default bill;
