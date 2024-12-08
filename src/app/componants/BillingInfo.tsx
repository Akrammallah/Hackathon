const BillingInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Billing Info</h2>
      <p className="text-sm text-gray-600">Please enter your billing info</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="Name" className="input-field" />
        <input type="text" placeholder="Phone Number" className="input-field" />
        <input type="text" placeholder="Address" className="input-field" />
        <input type="text" placeholder="Town / City" className="input-field" />
      </div>
    </div>
  );
};

export default BillingInfo;