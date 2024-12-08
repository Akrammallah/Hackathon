const PaymentMethod: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Payment Method</h2>
      <p className="text-sm text-gray-600">Please enter your payment method</p>
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input type="radio" name="payment" className="text-blue-500" />
          <span>Credit Card</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Card Number" className="input-field" />
          <input type="text" placeholder="Expiration Date" className="input-field" />
          <input type="text" placeholder="Card Holder" className="input-field" />
          <input type="text" placeholder="CVC" className="input-field" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;