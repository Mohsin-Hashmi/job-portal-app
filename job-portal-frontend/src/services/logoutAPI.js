import { BASE_URL } from "../utils/constant";
import axios from "axios";
const logoutAPI = async () => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/logout`, {
      withCredentials: true,
    });
    if (!response) {
      throw new Error("No response from server");
    }
    return response.data;
  } catch (err) {
    console.log("Error in logout API", err);
  }
};

export default logoutAPI;
