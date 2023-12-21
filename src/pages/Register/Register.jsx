import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// react icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { AuthContext } from "../../provider/AuthProvider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const api_key = import.meta.env.VITE_IMAGE_API_KEY;
const hosting_api = `https://api.imgbb.com/1/upload?key=${api_key}`;

const Register = () => {
  const [visible, setVisible] = useState(false);
  const { signIn, update } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const bio = form.bio.value;
    const img = form.img.files[0];
    console.log(name, email, password, bio, img);

    // hosting image
    const imageFile = { image: img };

    const res = await axiosPublic.post(hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    console.log(res.data);
    const image = res.data.data.display_url;
    if (res.data.success) {
      const info = {
        name,
        email,
        password,
        image: res.data.data.display_url,
      };

      signIn(email, password)
        .then(async (response) => {
          console.log(response);

          const result = await axiosPublic.post("/users", info);
          console.log(result.data);

          if (result.data.insertedId) {
            console.log(name,image,"updateeeee");
            
            update(name, image)
            .then(() => {
              toast("sign in successful!");
              console.log(result);
              navigate("/login");
            })
            .catch(error => {
              toast(error.message)
              console.log(error.message);
            })
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast(`${err.message}`);
        });
    } else {
      toast.error("try with another image");
    }
    // toast("try with another image")
  };
  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-4 sm:px-6 lg:px-8 dark:bg-[#060B13] max-w-[1200px] mx-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className=" text-center text-3xl font-extrabold text-gray-900 dark:text-[#7997D2]">
            Sign Up
          </h2>
        </div>
        <div className="mt-8 mx-auto w-[90%] 800px:w-[45%]">
          <div className="bg-white dark:bg-[#060B13] dark:border dark:border-[#7997D2] py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={submitForm} className="space-y-6 ">
              <div>
                <label
                  htmlFor="Username"
                  className="block text-sm dark:text-[#D9E1F2]  font-medium text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="username"
                    autoComplete="Username"
                    required
                    placeholder="Username"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-[#3960AC] dark:border-[#6e93dd] rounded-md shadow-sm placeholder-gray-400 dark:placeholder:text-[#7997D2] focus:outline-none dark:text-[#7997D2]  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm dark:text-[#D9E1F2]  font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-[#3960AC] dark:border-[#6e93dd] rounded-md shadow-sm placeholder-gray-400 dark:placeholder:text-[#7997D2] focus:outline-none dark:text-[#7997D2]  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm dark:text-[#D9E1F2]  font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative">
                  <input
                    type={visible ? "text" : "password"}
                    name="password"
                    autoComplete="current-password"
                    required
                    placeholder="Password"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 dark:bg-[#3960AC] dark:border-[#6e93dd] rounded-md shadow-sm placeholder-gray-400 dark:placeholder:text-[#7997D2] focus:outline-none dark:text-[#7997D2]  focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {visible ? (
                    <AiOutlineEye
                      className="absolute dark:text-[#6e93dd] right-2 top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <AiOutlineEyeInvisible
                      className="absolute right-2 dark:text-[#6e93dd] top-2 cursor-pointer"
                      size={25}
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="Bio"
                  className="block text-sm dark:text-[#D9E1F2] font-medium text-gray-700"
                >
                  Bio
                </label>
                <div className="mt-1">
                  <textarea
                    type="text"
                    name="bio"
                    required
                    maxLength={100}
                    placeholder="Write bio"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 dark:bg-[#3960AC] dark:border-[#6e93dd] dark:placeholder:text-[#7997D2] focus:outline-none dark:text-[#7997D2] focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  ></textarea>
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="Bio"
                  className="block text-sm py-2 dark:text-[#D9E1F2] font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  className="border-2 w-full "
                  type="file"
                  name="img"
                  id=""
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full h-[40px] flex justify-center py-2 px-4 dark:bg-[#7997D2] dark:text-[#0D1526] border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
              <div className="flex">
                <h4>Already have an account?</h4>
                <Link
                  to="/login"
                  className="text-[#025287] pl-2 dark:text-[#6689CC]"
                >
                  Login
                </Link>
              </div>
            </form>
          </div>
          {/* <ToastContainer /> */}
        </div>
      </div>
    </div>
  );
};

export default Register;
