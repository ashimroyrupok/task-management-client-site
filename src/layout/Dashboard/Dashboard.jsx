import { IoMdMenu, IoMdNotificationsOutline } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import MakeTask from "../../components/MakeTask/MakeTask";
import ManageTask from "./manageTask/ManageTask";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
    const {user} = useContext(AuthContext)
    //  const { user } = useContext(AuthContext);
     const axiosPublic = useAxiosPublic();

     const { data: tasks = [], refetch } = useQuery({
       queryKey: [user?.email],
       queryFn: async () => {
         const res = await axiosPublic.get(`task/${user?.email}`);
         return res.data;
       },
     });
     const { data: taskOngoing = [] } = useQuery({
       queryKey: [user?.email,"taskOngoing"],
       queryFn: async () => {
         const res = await axiosPublic.get(`tasks/onGoing/${user?.email}`);
         return res.data;
       },
     });

     console.log(taskOngoing , "alkdsjlkjsdflfasflkdf");
    //  console.log(tasks);
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
              {/* <li>
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
              </li> */}
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
                <div className="  text-center lg:block relative">
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className=""
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    <h2 className="btn btn-outline text-center">
                      {" "}
                      <FaPlus /> Add New Task
                    </h2>
                  </button>
                  <dialog
                    id="my_modal_5"
                    className="modal modal-bottom sm:modal-middle"
                  >
                    <div className="modal-box">
                      <MakeTask refetch={refetch}></MakeTask>
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>
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

              <ManageTask tasks={tasks} taskOngoing={taskOngoing}></ManageTask>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
