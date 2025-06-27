
import { BASE_URL } from "../utils/constant";
const getAllJobs = async () => {

  try {
    const response = await fetch(`${BASE_URL}/jobs/read-jobs`, {
      method: 'GET',
    });
    const jobs = await response.json();
    return jobs;
  } catch (err) {
    console.error('Error fetching Remote OK jobs:', err);
  }
}

export default getAllJobs;