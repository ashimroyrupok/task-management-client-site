import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { IoTimerOutline } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import UpdateTask from "../../../components/UpdateTask/UpdateTask";

const ManageTask = ({
  tasks,
  taskOngoing,
  taskComplete,
  refetch,
  ongoingFetch,
  completeFetch,
}) => {
  // const {user}= useContext(AuthContext)
  const axiosPublic = useAxiosPublic();
  const [forUpdate, setForUpdate] = useState({});

  // find update data
  const handleUpdate = async (id) => {
    console.log(id);
    const res = await axiosPublic.get(`task/update/${id}`);
    console.log(res.data);
    setForUpdate(res.data);
  };

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`task/delete/${id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          ongoingFetch();
          completeFetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  return (
    <div className="flex items-center w-full mx-auto  bg-slate-100  h-full justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
        {/* todo */}
        <div className="col-span-1 w-full  px-3 py-4 shadow-xl">
          <div className="card  bg-error bg-blend-darken bg-opacity-50  text-primary-content">
            <div className="card-body w-full  items-center justify-center text-center">
              <h2 className="card-title text-white font-bold text-clip">
                To-Do
              </h2>
            </div>
          </div>
          <div className="mt-5">
            {/* task data */}
            <div>
              {tasks?.map((task) => (
                <div key={task?._id} className="px-3 mt-2 mb-[5px]">
                  <div className=" bg-white rounded-lg ">
                    <div className="p-4 space-y-1 shadow-md">
                      <div className="flex justify-between">
                        <h1 className="font-bold">{task?.taskName}</h1>
                        <div className="flex gap-2">
                          {/* update button */}
                          <button onClick={() => handleUpdate(task?._id)}>
                            <FaEdit
                              onClick={() =>
                                document
                                  .getElementById("my_modal_6")
                                  .showModal()
                              }
                              className="text-[22px] text-[#5082e8]"
                            />
                            <dialog
                              id="my_modal_6"
                              className="modal modal-bottom sm:modal-middle"
                            >
                              <div className="modal-box">
                                <UpdateTask
                                  refetch={refetch}
                                  ongoingFetch={ongoingFetch}
                                  completeFetch={completeFetch}
                                  forUpdate={forUpdate}
                                ></UpdateTask>
                                <div className="modal-action">
                                  <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Close</button>
                                  </form>
                                </div>
                              </div>
                            </dialog>
                          </button>
                          <MdDeleteForever
                            onClick={() => handleDelete(task._id)}
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
          {/* ongoing */}
          <div>
            {taskOngoing?.map((going) => (
              <div key={going?._id} className="px-3 mt-2 mb-[5px]">
                <div className=" bg-white rounded-lg ">
                  <div className="p-4 space-y-1 shadow-md">
                    <div className="flex justify-between">
                      <h1 className="font-bold">{going?.taskName}</h1>
                      <div className="flex gap-2">
                        {/* update button */}
                        <button onClick={() => handleUpdate(going?._id)}>
                          <FaEdit
                            onClick={() =>
                              document.getElementById("my_modal_6").showModal()
                            }
                            className="text-[22px] text-[#5082e8]"
                          />
                          {/* <dialog
                            id="my_modal_7"
                            className="modal modal-bottom sm:modal-middle"
                          >
                            <div className="modal-box">
                              <UpdateTask
                                refetch={refetch}
                                ongoingFetch={ongoingFetch}
                                completeFetch={completeFetch}
                                forUpdate={forUpdate}
                              ></UpdateTask>
                              <div className="modal-action">
                                <form method="dialog">
                                  <button className="btn">Close</button>
                                </form>
                              </div>
                            </div>
                          </dialog> */}
                        </button>
                        <MdDeleteForever
                          onClick={() => handleDelete(going._id)}
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
        {/* complete */}
        <div className="w-full shadow-xl px-3">
          <div className="card  bg-success w-full text-center text-primary-content">
            <div className="card-body flex justify-center items-center text-center">
              <h2 className="card-title text-white font-bold text-center">
                Complete
              </h2>
            </div>
          </div>
          <div>
            {taskComplete?.map((going) => (
              <div key={going?._id} className="px-3 mt-2 mb-[5px]">
                <div className=" bg-white rounded-lg ">
                  <div className="p-4 space-y-1 shadow-md">
                    <div className="flex justify-between">
                      <h1 className="font-bold">{going?.taskName}</h1>
                      <div className="flex gap-2">
                        {/* update button */}
                        <button onClick={() => handleUpdate(going?._id)}>
                          <FaEdit
                            onClick={() =>
                              document.getElementById("my_modal_8").showModal()
                            }
                            className="text-[22px] text-[#5082e8]"
                          />
                          {/* <dialog
                            id="my_modal_8"
                            className="modal modal-bottom sm:modal-middle"
                          >
                            <div className="modal-box">
                              <UpdateTask
                                refetch={refetch}
                                ongoingFetch={ongoingFetch}
                                completeFetch={completeFetch}
                                forUpdate={forUpdate}
                              ></UpdateTask>
                              <div className="modal-action">
                                <form method="dialog">
                                  <button className="btn">Close</button>
                                </form>
                              </div>
                            </div>
                          </dialog> */}
                        </button>
                        <MdDeleteForever
                          onClick={() => handleDelete(going._id)}
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
      </div>
    </div>
  );
};

export default ManageTask;
