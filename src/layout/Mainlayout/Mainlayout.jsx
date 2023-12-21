import { Outlet } from "react-router-dom";

const Mainlayout = () => {
    return (
        <div className="bg-gradient-to-tr from-[#021441] to-[#02679F] text-white">

            <Outlet></Outlet>
            
        </div>
    );
};

export default Mainlayout;