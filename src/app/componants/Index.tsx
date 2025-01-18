'use client'
import DashboardLayout from '@/app/componants/DashBoardLayout';
import TopCarsChart from '@/app/componants/chart';
import RecentTransactions from '@/app/componants/Table';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TopCarsChart />
        <RecentTransactions />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;