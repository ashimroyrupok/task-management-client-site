import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { IoTimerOutline } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";

const ManageTask = ({ tasks, taskOngoing }) => {
  // const {user}= useContext(AuthContext)
  // const axiosPublic = useAxiosPublic()

  // const { data: tasks = [], refetch } = useQuery({
  //   queryKey: [user?.email],
  //   queryFn: async () => {
  //     const res = await axiosPublic.get(`/task/${user?.email}`);
  //     return res.data;
  //   },
  // });

  // console.log(tasks);

  const handleDelete = (id) => {
    console.log(id);
  };

  return (
    <div className="flex items-center w-full mx-auto  bg-slate-100  h-full justify-center">
      <div className="grid grid-cols-3 gap-7 w-full">
        <div className="col-span-1 w-full  px-3 py-4 shadow-xl">
          <div className="card  bg-error bg-blend-darken bg-opacity-50  text-primary-content">
            <div className="card-body w-full  items-center justify-center text-center">
              <h2 className="card-title text-white font-bold text-clip">
                To-Do
              </h2>
            </div>
          </div>
          <div className="mt-5">
            <div>
              {tasks?.map((task) => (
                <div key={task?._id} className="px-3 mt-2 mb-[5px]">
                  <div className=" bg-white rounded-lg ">
                    <div className="p-4 space-y-1 shadow-md">
                      <div className="flex justify-between">
                        <h1 className="font-bold">{task?.taskName}</h1>
                        <div className="flex gap-2">
                          <FaEdit className="text-[22px] text-[#5082e8]" />
                          <MdDeleteForever
                            onClick={() => handleDelete()}
                            className="text-red-500 text-[25px]"
                          />
                        </div>
                      </div>
                      <p className="flex font-semibold items-center gap-2">
                        {" "}
                        <FcHighPriority /> {task?.priority}
                      </p>
                      <p className="text-gray-600">{task?.description}</p>
                      <hr />
                      <p className="flex gap-2 items-center">
                        {" "}
                        <IoTimerOutline /> {task?.deadline}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full shadow-xl px-3">
          <div className="card w-full  bg-primary bg-opacity-50 text-primary-content">
            <div className="card-body flex items-center justify-center text-center w-full">
              <h2 className="card-title text-white font-bold ">On Going</h2>
            </div>
          </div>
          <div>
            {taskOngoing?.map((going) => (
              <div key={going?._id} className="px-3 mt-2 mb-[5px]">
                <div className=" bg-white rounded-lg ">
                  <div className="p-4 space-y-1 shadow-md">
                    <div className="flex justify-between">
                      <h1 className="font-bold">{going?.taskName}</h1>
                      <div className="flex gap-2">
                        <FaEdit className="text-[22px] text-[#5082e8]" />
                        <MdDeleteForever
                          onClick={() => handleDelete()}
                          className="text-red-500 text-[25px]"
                        />
                      </div>
                    </div>
                    <p className="flex font-semibold items-center gap-2">
                      {" "}
                      <FcHighPriority /> {going?.priority}
                    </p>
                    <p className="text-gray-600">{going?.description}</p>
                    <hr />
                    <p className="flex gap-2 items-center">
                      {" "}
                      <IoTimerOutline /> {going?.deadline}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full shadow-xl px-3">
          <div className="card  bg-success w-full text-center text-primary-content">
            <div className="card-body flex justify-center items-center text-center">
              <h2 className="card-title text-white font-bold text-center">
                Card title!
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageTask;
