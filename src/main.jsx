import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
 import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'
import AuthProvider from './provider/AuthProvider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
