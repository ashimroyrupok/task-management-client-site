import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout/Mainlayout";
import Landing from "../pages/Landing/Landing";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
        {
            path: "/",
            element:<Landing></Landing>
        }
    ]
  },
  {
    path:"/register",
    element: <Register></Register>
  },
  {
    path:"/login",
    element:<Login></Login>
  }
])

export default router;