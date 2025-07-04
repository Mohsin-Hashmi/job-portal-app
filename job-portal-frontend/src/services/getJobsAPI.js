
import { BASE_URL } from "../utils/constant";
import axios from 'axios';
const getAllJobs = async () => {

  try {
    const response = await axios.get(`${BASE_URL}/jobs/read-jobs`, {withCredentials: true});
    return response.data;
  } catch (err) {
    console.error('Error fetching Remote OK jobs:', err);
  }
}

export default getAllJobs;