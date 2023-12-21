import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout/Mainlayout";
import Landing from "../pages/Landing/Landing";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Errorpage from "../pages/Errorpage/Errorpage";
import Dashboard from "../layout/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement:<Errorpage></Errorpage>,
    children:[
        {
            path: "/",
            element:<Landing></Landing>
        }
    ]
  },
  {
    path:"/dashboard",
    element: <Dashboard></Dashboard>,
    children:[
        {

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