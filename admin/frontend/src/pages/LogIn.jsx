import { FaArrowRightLong } from "react-icons/fa6";

const LogIn = () => {
  return (
    <div className="flex flex-col max-w-100 mx-auto h-screen justify-center space-y-10">
      <div className="flex gap-4">
        <img src="/logo-icon.png" alt="" className="w-15" />
        <div className="leading-4">
          <h1 className="font-bold text-xl">Superwheels</h1>
          <h2 className="text-gray-500 font-semibold">Autoparts</h2>
        </div>
      </div>
      <div className="space-y-1">
        <h1 className="text-gray-500 font-semibold text-sm">ADMIN PORTAL</h1>
        <h2 className="font-bold text-3xl">Welcome back</h2>
        <p className="text-gray-400">Sign in to manage your store inventory.</p>
      </div>
      <div className="space-y-3 w-full">
        <div className="space-y-2">
          <h3 className="text-gray-700 text-sm font-semibold">Email address</h3>
          <input
            type="text"
            placeholder="admin@superwheels.com"
            className="border border-gray-300 px-2 py-1 rounded-lg min-w-100 bg-lime-50/30 outline-amber-300"
          />
        </div>
        <div className="space-y-2">
          <h3 className="text-gray-700 text-sm font-semibold">Password</h3>
          <input
            type="text"
            placeholder="Enter your password"
            className="border border-gray-300 px-2 py-1 rounded-lg min-w-100 bg-lime-50/30 outline-amber-300"
          />
        </div>
      </div>
      <button className="bg-primary py-2 rounded-lg hover:bg-lime-200 cursor-pointer flex justify-center items-center gap-2">
        Sign in <FaArrowRightLong className="text-gray-600 text-xs" />
      </button>
    </div>
  );
};

export default LogIn;
