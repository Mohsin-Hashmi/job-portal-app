import { BASE_URL } from "../utils/constant";
import axios from "axios";
const updateJobAPI = async (jobId, payload) => {
  try {
    const response = await axios.put(
      `${BASE_URL}/jobs/update-job/${jobId}`,
      payload ,
      { withCredentials: true }
    );
    console.log("update api is ", response)
    return response?.data?.updated_job_is;
  } catch (err) {
    console.log("Error in update job API");
  }
};

export default updateJobAPI;
