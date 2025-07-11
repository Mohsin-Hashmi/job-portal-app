import { BASE_URL } from "../utils/constant";
import axios from "axios";
const savedJobAPI = async (jobId) => {
  try {
    const response = await axios.post(`${BASE_URL}/jobs/${jobId}/save`, {},  {
      withCredentials: true,
    });
    return response?.data?.savedJobs;
  } catch (err) {
    console.log("Error in saved job API");
  }
};

export default savedJobAPI;
