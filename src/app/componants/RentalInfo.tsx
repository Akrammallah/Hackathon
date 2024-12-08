const RentalInfo: React.FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Rental Info</h2>
      <p className="text-sm text-gray-600">Please select your rental date</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Pick-Up Location</label>
          <select className="input-field">
            <option>Select your city</option>
          </select>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-700">Date</label>
          <input type="date" placeholder="select date" className="input-field" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-700">Time</label>
          <select className="input-field">
            <option>Select your time</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default RentalInfo;
