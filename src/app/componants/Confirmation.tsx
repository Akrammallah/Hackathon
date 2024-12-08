const Confirmation: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Confirmation</h2>
      <p className="text-sm text-gray-600">
        We are getting to the end. Just a few clicks and your rental is ready!
      </p>
      <div className="space-y-2">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="text-blue-500" />
          <span>I agree with sending marketing emails. No spam, promised!</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="text-blue-500" />
          <span>I agree with the terms and conditions.</span>
        </label>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-lg">
        Rent Now
      </button>
    </div>
  );
};

export default Confirmation;
