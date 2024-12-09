import { ReactNode } from 'react';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/5 bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">NORENT</h1>
        <ul className="mt-4">
          <li className="py-2 px-4 hover:bg-gray-700">Dashboard</li>
          <li className="py-2 px-4 hover:bg-gray-700">Rentals</li>
          <li className="py-2 px-4 hover:bg-gray-700">Settings</li>
        </ul>
      </aside>
      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Dashboard Admin Car Rent</h2>
          <input
            type="text"
            placeholder="Search something..."
            className="border rounded p-2"
          />
        </header>
        <section>{children}</section>
      </main>
    </div>
  );
};

export default DashboardLayout;
