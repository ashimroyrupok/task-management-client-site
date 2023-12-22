import axios from "axios";

const axiospublic = axios.create({
  baseURL: "https://task-management-app-server-site.vercel.app/",
});

const useAxiosPublic = () => {
    return axiospublic ;
 
};


export default useAxiosPublic;