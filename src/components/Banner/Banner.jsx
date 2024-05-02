import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-screen w-full bg-transparent">
      <div className="flex justify-center pt-10 items-center bg-transparent  w-full gap-10">
        <div className="w-1/2 relative h-full  mx-auto ">
          <div className="  w-full h-[70vh]  mx-auto  p-10 ">
            <div className="flex flex-col justify-center items-start absolute top-[25%] left-[10%]">
              <h2 className="text-2xl lg:text-7xl font-bold ">Manage Your </h2>
              <h2 className="text-2xl lg:text-7xl font-bold my-4">
                {" "}
                <span className="text-[#021745] border-b-4">Task</span> Better
              </h2>
              <p className="mt-6 text-sm lg:text-xl text-slate-400">
                Get the best out of everyday by <br /> effectively scheduling
                task
              </p>

              <Link
                to={"/dashboard"}
                data-aos="flip-left"
                className="btn bg-[#021745]  px-10 py-4 hover:text-black text-white mt-8"
              >
                Lets Explore
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-full ">
          <div className="flex justify-start items-start ">
            <div className="  relative ">
              <img
                data-aos="flip-left"
                className="w-80 px-2"
                src="https://i.ibb.co/qsLwkjf/woman-placing-sticky-notes-wall.jpg"
                alt=""
              />
              <img
                className="w-96 hidden lg:block  absolute bottom-[-70%]  lg:right-[-50%] "
                src="https://i.ibb.co/gZXbnBh/pretty-girl-with-red-hair-working-laptop-coffee-holding.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
