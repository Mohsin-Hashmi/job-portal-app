import { BASE_URL } from "../utils/constant";
import axios from "axios";
const deleteSavedJobAPI = async (jobId) => {
  try {
    const response = await axios.delete(
      `${BASE_URL}/jobs/${jobId}/save`,
      {
        withCredentials: true,
      }
    );
    return response.data.deletedJob;
  } catch (err) {
    console.log("Error in delete saved job api");
  }
};

export default deleteSavedJobAPI;
