import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { FcHighPriority } from "react-icons/fc";
import { IoTimerOutline } from "react-icons/io5";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import UpdateTask from "../../../components/UpdateTask/UpdateTask";
//
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ManageTask = ({
  // tasks,
  // taskOngoing,
  // taskComplete,
  // refetch,
  // ongoingFetch,
  // completeFetch,
  data,
  dataFetch
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
          // refetch();
          dataFetch();
          // ongoingFetch();
          // completeFetch();
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const [sections, setSections] = useState({
    todo: [],
    ongoing: [],
    completed: [],
  });

  useEffect(() => {
    if (data) {
      setSections({
        todo: data.filter((item) => item.taskStatus === "todo"),
        ongoing: data.filter((item) => item.taskStatus === "ongoing"),
        completed: data.filter((item) => item.taskStatus === "completed"),
      });
    }
  }, [data]);
  console.log(data);

  console.log(sections);

  const onDragEnd = async (result) => {
    if (!result.destination) return;

    // Update local state immediately
    const updatedSections = { ...sections };
    const [moveTask] = updatedSections[result.source.droppableId].splice(
      result.source.index,
      1
    );
    updatedSections[result.destination.droppableId].splice(
      result.destination.index,
      0,
      moveTask
    );
    setSections(updatedSections);

    // Persist changes to backend
    const order = result.destination.index + 1;
    await axiosPublic.patch("/task", {
      id: moveTask._id,
      status: result.destination.droppableId,
      order,
    });
  };

  return (
    <div className="flex items-center w-full mx-auto  bg-slate-100  h-full justify-center">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 bg-slate-100 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
          {Object.keys(sections).map((sectionKey) => (
            <div
              className="border-2 shadow-xl  p-2 rounded-lg min-h-screen"
              key={sectionKey}
            >
              <div className="card  bg-error bg-blend-darken bg-opacity-50  text-primary-content">
                <div className="card-body w-full  items-center justify-center text-center">
                  <h2 className="text-[18px] w-full card text-white bg-blend-darken bg-opacity-50 py-4 justify-center text-center text-3xl  font-bold">
                    {sectionKey.charAt(0).toUpperCase() + sectionKey.slice(1)}
                  </h2>
                </div>
              </div>

              <Droppable droppableId={sectionKey} key={sectionKey}>
                {(provided) => (
                  <ul
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className="min-h-screen"
                  >
                    {sections[sectionKey].map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                          >
                            <div className=" bg-white my-3 rounded-lg ">
                              <div className="p-4 space-y-1 shadow-md">
                                <div className="flex justify-between">
                                  <h1 className="font-bold">
                                    {task?.taskName}
                                  </h1>
                                  <div className="flex gap-2">
                                    {/* update button */}
                                    <button
                                      onClick={() => handleUpdate(task?._id)}
                                    >
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
                                            // refetch={refetch}
                                            // ongoingFetch={ongoingFetch}
                                            // completeFetch={completeFetch}
                                            dataFetch={dataFetch}
                                            forUpdate={forUpdate}
                                          ></UpdateTask>
                                          <div className="modal-action">
                                            <form method="dialog">
                                              {/* if there is a button in form, it will close the modal */}
                                              <button className="btn">
                                                Close
                                              </button>
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
                                <p className="text-gray-600">
                                  {task?.description}
                                </p>
                                <hr />
                                <p className="flex gap-2 items-center">
                                  {" "}
                                  <IoTimerOutline /> {task?.deadline}
                                </p>
                              </div>
                            </div>
                          </li>
                        )}
                      </Draggable>
                    ))}

                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </div>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default ManageTask;
