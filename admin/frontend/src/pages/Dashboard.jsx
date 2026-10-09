import { MdCategory } from "react-icons/md";
import { dashboardCards } from "../../data/dashboardCards";

const Dashboard = () => {
  return (
    <div className="mt-5">
      <div className="space-y-1">
        <h1 className="text-gray-400 font-semibold text-xs">TUESDAY, 21 MAY</h1>
        <h2 className="font-semibold text-3xl">Good morning, JACKMA.</h2>
        <p className="text-gray-500 text-sm">
          Here's what's happening with your inventory today
        </p>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {dashboardCards.map((card) => (
            <DashboardCard {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

function DashboardCard({ icon, data, dataName }) {
  return (
    <div className="bg-secondary rounded-xl p-5 h-45 flex flex-col justify-between">
      <span className="text-primary bg-gray-800 flex justify-center items-center w-fit p-1.5 rounded-lg">
        {icon}
      </span>
      <span className="text-white font-bold text-3xl">{data}</span>
      <h1 className="text-gray-400 text-sm">{dataName}</h1>
    </div>
  );
}
