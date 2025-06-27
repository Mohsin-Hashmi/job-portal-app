
import { BASE_URL } from "../utils/constant";
import axios from "axios";
const postJobAPI = async ({
  title,
  company,
  location,
  type,
  department,
  salary,
  skills,
  description,
  experience,
  requirements,
  benefits,
}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/jobs/create-job`,
      {
        title,
        company,
        location,
        type,
        department,
        salary,
        skills,
        description,
        experience,
        requirements,
        benefits,
      },
      { withCredentials: true }
    );
    if (!response) {
      throw new Error("No response from server");
    }
    return response.job;
  } catch (err) {
    console.error('Error fetching Remote OK jobs:', err);
  }
};

export default postJobAPI;
