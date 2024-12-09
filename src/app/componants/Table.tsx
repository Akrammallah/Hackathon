const RecentTransactions = () => (
  <div className="bg-white p-4 rounded shadow">
    <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
    <table className="w-full border-collapse border border-gray-200">
      <thead>
        <tr>
          <th className="border border-gray-300 p-2">Car</th>
          <th className="border border-gray-300 p-2">Date</th>
          <th className="border border-gray-300 p-2">Price</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 p-2">Nissan GT-R</td>
          <td className="border border-gray-300 p-2">Dec 1, 2024</td>
          <td className="border border-gray-300 p-2">$80.00</td>
        </tr>
        <tr>
          <td className="border border-gray-300 p-2">Lamborghini</td>
          <td className="border border-gray-300 p-2">Dec 3, 2024</td>
          <td className="border border-gray-300 p-2">$150.00</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default RecentTransactions;
