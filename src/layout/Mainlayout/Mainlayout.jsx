import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Mainlayout = () => {
    return (
      <div className="bg-gradient-to-tr from-[#021441] to-[#02679F] text-white">
        <Outlet></Outlet>
        <ToastContainer />
      </div>
    );
};

export default Mainlayout;