import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import { CiLogin } from "react-icons/ci";
const Navbar = () => {
  

  return (
    <div className="navbar fixed z-50 bg-transparent w-full mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            id="navItem"
            className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-[#021441] rounded-box w-52"
          >
            <li className="bg-transparent">
              {" "}
              <NavLink to={"/"}> Home </NavLink>{" "}
            </li>
            <li className="bg-transparent">
              {" "}
              <NavLink to={"/contact"}> Contact us </NavLink>{" "}
            </li>
            <li className="bg-transparent">
              {" "}
              <NavLink to={"/dashboard"}> Dashboard </NavLink>{" "}
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Manage Your Task</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul id="navItem" className="menu font-semibold menu-horizontal px-1">
          <li className="bg-transparent hover:bg-transparent">
            {" "}
            <NavLink to={"/"}> Home </NavLink>{" "}
          </li>
          <li className="bg-transparent">
            {" "}
            <NavLink to={"/contact"}> Contact us </NavLink>{" "}
          </li>
          <li className="bg-transparent hover:bg-transparent">
            {" "}
            <NavLink to={"/dashboard"}> Dashboard </NavLink>{" "}
          </li>
        </ul>
      </div>
      <div className="navbar-end pr-6">
        <div className="flex justify-between items-center gap-2">
          <a
            href=""
            className="btn text-white border-2 border-[#021745] hover:text-white hover:bg-[#021745] btn-outline"
          >
            {" "}
            Login <CiLogin className="text-2xl font-extrabold  "></CiLogin>{" "}
          </a>
          <Link
            to={"/register"}
            href=""
            className="btn hidden lg:block text-white border-2 border-[#021745] hover:text-white bg-[#021745] btn-outline"
          >
            <div className="flex justify-center items-center pt-3">
              SignUp <CiLogin className="text-xl font-extrabold  "></CiLogin>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
