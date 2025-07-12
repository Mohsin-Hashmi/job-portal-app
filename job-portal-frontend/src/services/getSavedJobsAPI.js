import { BASE_URL } from "../utils/constant";
import axios from "axios";
const getSavedJobsAPI = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs/saved-jobs`, {
      withCredentials: true,
    });
    if (response?.data?.success) {
      return response.data.savedJobs;
    } else {
      console.log("API call successful but no jobs found");
      return [];
    }
  } catch (err) {
    console.log("Error in get saved job API");
  }
};
export default getSavedJobsAPI;
