
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useForm } from "react-hook-form";

const UpdateTask = ({ forUpdate, dataFetch }) => {
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    // console.log(data);

    const info = {
      taskName: data.taskName,
      taskStatus: data.taskStatus,
      priority: data.priority,
      deadline: data.deadline,
      description: data.description,
    };
    console.log(info);
    const res = await axiosPublic.patch(
      `task/updateNow/${forUpdate?._id}`,
      info
    );
    console.log(res.data);
    toast("task updated successfully");
    // refetch();
    // ongoingFetch();
    // completeFetch();
    data.reset();
    dataFetch();
  };
  return (
    <div className="card shrink-0 w-full max-w-sm  bg-transparent">
      <h2 className="font-semibold text-3xl">Update your new Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Name</span>
          </label>
          <input
            type="text"
            defaultValue={forUpdate?.taskName}
            name="taskName"
            className="input input-bordered"
            {...register("taskName", { required: true })}
          />
          {errors.taskName && (
            <h5 className="text-red-600"> This field is required </h5>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Status</span>
          </label>
          <select
            name="taskStatus"
            // onChange={handleStatusChange} // Fix: Use a function here
            // value={selectedStatus} // Optionally set the value if needed
            className="select w-full border-2 border-gray-400 max-w-xs"
            defaultValue={"todo"}
            {...register("taskStatus", { required: true })}
          >
            <option disabled defaultValue>
              Pick up your task status
            </option>
            <option value={"todo"}>todo</option>
            <option value={"ongoing"}>On Going</option>
            <option value={"completed"}>complete</option>
          </select>
        </div>
        {/* time and priority */}
        <div className="flex w-full justify-center mx-auto items-center gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Priority</span>
            </label>
            <select
              className="select w-full border-2 border-gray-400 max-w-xs"
              name="priority"
              defaultValue={"low"}
              {...register("priority", { required: true })}
            >
              <option disabled selected>
                Pick up Priority
              </option>
              <option value={"high"}>high</option>
              <option value={"low"}>low</option>
              <option value={"moderate"}>moderate</option>
            </select>
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Deadline</span>
            </label>
            <input
              type="date"
              // placeholder="email"
              name="deadline"
              defaultValue={forUpdate?.deadline}
              className="input input-bordered"
              {...register("deadline", { required: true })}
            />
            {errors.deadline && (
              <h5 className="text-red-600"> This field is required </h5>
            )}
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Description</span>
          </label>
          <textarea
            name="description"
            defaultValue={forUpdate?.description}
            className="textarea textarea-bordered"
            placeholder="Bio"
            {...register("description", { required: true })}
          ></textarea>

          {errors.description && (
            <h5 className="text-red-600"> This field is required </h5>
          )}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-outline text-white bg-[#021B48]">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTask;
