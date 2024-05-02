import Navbar from "../../Shared/Navbar/Navbar";

const Contact = () => {
  return (
    <div className="bg   mx-auto w-full">
        <Navbar></Navbar>
      <div className="h-screen pt-32 w-full ">
        <title>Contact Us</title>
        <form action="https://fabform.io/f/{form-id}" method="post">
          <div className="bg-white p-8 rounded-lg  max-w-md mx-auto  w-full">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Contact Us
            </h1>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="John Doe"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border-2 border-gray-300 p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="johndoe@example.com"
                required=""
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border-2 border-gray-300 p-2 rounded-lg w-full h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Your message"
                required=""
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white p-2 rounded-lg font-semibold w-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              Send
            </button>
            <div className="mt-4 text-sm text-gray-600">
              If you prefer not to use web forms, you can reveal our email
              address on{" "}
              <a
                href="https://veilmail.io/e/FkKh7o"
                className="underline"
                target="_blank"
              >
                veilmail.io/e/FkKh7o
              </a>
              .
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
