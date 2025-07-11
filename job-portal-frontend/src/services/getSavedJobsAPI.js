import { BASE_URL } from "../utils/constant";
import axios from "axios";
const getSavedJobsAPI = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/jobs/saved-jobs`,
      {
        withCredentials: true,
      }
    );
    return response?.data?.savedJobs;
  } catch (err) {
    console.log("Error in get saved job API");
  }
};
export default getSavedJobsAPI;
