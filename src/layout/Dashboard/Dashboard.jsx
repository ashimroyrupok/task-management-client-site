import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
  return (
    <div className="">
      <div className="flex">
        <div>
          <div className="drawer lg:hidden z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer" className="  drawer-button">
                <IoMdMenu className="text-3xl pl-2  mt-4  font-bold" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="w-[300px] bg-[#021A48] h-screen text-white p-8">
                <div className="flex flex-col justify-center items-center mb-6">
                  <img
                    src={user?.photoURL}
                    alt="User"
                    className="rounded-full w-16 h-16 mr-4"
                  />
                  <div>
                    <p className="text-lg font-semibold">{user.displayName}</p>
                  </div>
                </div>

                <ul className="flex flex-col gap-4 mt-16">
                  <li>
                    <button className="w-full">
                      <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block"
                            : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"
                        }
                      >
                        DashBoard
                      </NavLink>
                    </button>
                  </li>
                  <li>
                    <button className="w-full">
                      <NavLink
                        to="/dashboard/addTask"
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "pending"
                            : isActive
                            ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block"
                            : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"
                        }
                      >
                        Add Task
                      </NavLink>
                    </button>
                  </li>
                </ul>
                <div className="divider">OR</div>
                <ul className="flex flex-col gap-4 mt-4">
                  <button className="w-full">
                    <NavLink
                      to="/"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block"
                          : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"
                      }
                    >
                      Go Home
                    </NavLink>
                  </button>
                </ul>
              </div>
            </div>
          </div>

          {/* lg navbar */}
          <div className="w-[300px] hidden lg:block p-8">
            <div className="flex flex-col justify-center items-center mb-6">
              <img
                src={user?.photoURL}
                alt="User"
                className="rounded-full w-16 h-16 mr-4"
              />
              <div>
                <p className="text-lg font-semibold">{user.displayName}</p>
              </div>
            </div>

            <ul className="flex flex-col gap-4 mt-16">
              <li>
                <button className="w-full">
                  <NavLink
                    to="/dashboard"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block"
                        : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"
                    }
                  >
                    DashBoard
                  </NavLink>
                </button>
              </li>
              <li>
                <button className="w-full">
                  <NavLink
                    to="/dashboard/addTask"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block"
                        : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"
                    }
                  >
                    Add Task
                  </NavLink>
                </button>
              </li>
            </ul>
            <div className="divider">OR</div>
            <ul className="flex flex-col gap-4 mt-4">
              <button className="w-full">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "bg-[#2563DC] text-white py-1 px-2 rounded w-full text-center block"
                      : "bg-[#EEF2FC] py-1 px-2 rounded text-black w-full text-center block"
                  }
                >
                  Go Home
                </NavLink>
              </button>
            </ul>
          </div>
        </div>
        <div className="lg:border-l w-full min-h-screen py-4">
          <div>
            <div className="flex  gap-4 border-b px-10 pb-6 items-center">
              <div className="w-[80%] ">
                <div className=" hidden text-center lg:block relative">
                  <h2 className="btn btn-outline text-center">
                    {" "}
                    <FaPlus /> Add New Task
                  </h2>
                </div>
              </div>
              <div className="flex gap-4 items-center justify-end lg:w-[20%]">
                <IoMdNotificationsOutline className="w-[45px] h-[25px]" />
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={user.photoURL}
                  alt=""
                />
              </div>
            </div>
            {/* outlet */}
            <div className="p-10">
              {/* <CreateTask /> */}
              {/* <div>
                <Task></Task>
              </div> */}

              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
