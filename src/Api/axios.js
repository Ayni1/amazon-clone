import axios from "axios";
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/one-11244/us-central1/api",
  baseURL: "http://localhost:5000",


  // deployed version of amazon server on render.com
  
 baseURL: "https://amazon-api-eoz1.onrender.com"
});

export { axiosInstance };
