import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout/Mainlayout";
import Landing from "../pages/Landing/Landing";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Errorpage from "../pages/Errorpage/Errorpage";
import Dashboard from "../layout/Dashboard/Dashboard";
import PrivateRoute from "../route/PrivateRoute";
import AddTask from "../layout/Dashboard/addTask/addTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Landing></Landing>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

export default router;
