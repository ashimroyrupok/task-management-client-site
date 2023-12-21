import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout/Mainlayout";
import Landing from "../pages/Landing/Landing";

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
])

export default router;