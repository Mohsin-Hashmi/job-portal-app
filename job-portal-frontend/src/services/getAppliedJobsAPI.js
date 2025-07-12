import axios from "axios";
import { BASE_URL } from "../utils/constant";
const getAppliedJobs = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/jobs/getApplyJob`, {
      withCredentials: true,
    });
    if (response.data.success) {
      return response?.data?.applied_Jobs;
    }else {
       throw new Error("Something wrong in get applied jobs API");
    }
    
  } catch (err) {
    console.log(err)
    console.log("Error to get Applied Jobs");
  }
};
export default getAppliedJobs;
