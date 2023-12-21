import { useState } from "react";
import { useForm } from "react-hook-form";

const MakeTask = () => {

    const {status,setStatus} = useState("To-Do")

    const handleStatus =(event)=>{
        setStatus(event.target.value);
    }
     const {
       register,
       handleSubmit,
       formState: { errors },
     } = useForm();
  const onSubmit= async(data)=>{
    console.log(data);
  }



  return (
    <div className="card shrink-0 w-full max-w-sm  bg-transparent">
      <h2 className="font-semibold text-3xl">Add your new Task</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Name</span>
          </label>
          <input
            type="text"
            // placeholder="email"
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
            onChange={handleStatus}
            className="select w-full border-2 border-gray-400 max-w-xs"
          >
            <option disabled selected>
              Pick up your task status
            </option>
            <option>To-Do</option>
            <option>On Going</option>
          </select>
          {errors.taskName && (
            <h5 className="text-red-600"> This field is required </h5>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Task Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered"
            placeholder="Bio"
            {...register("description", { required: true })}
          ></textarea>

          {errors.description && (
            <h5 className="text-red-600"> This field is required </h5>
          )}
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-outline text-white bg-[#021B48]">Create</button>
        </div>
      </form>
    </div>
  );
};

export default MakeTask;
