import axios from "axios";

const axiospublic = axios.create({
  baseURL: "https://task-management-app-server-site.vercel.app/",
  // baseURL: "http://localhost:5000/",
});

const useAxiosPublic = () => {
    return axiospublic ;
 
};


export default useAxiosPublic;