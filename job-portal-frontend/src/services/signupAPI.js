import axios from "axios";
import { BASE_URL } from "../utils/constant";
const signupAPI = async ({ name, email, password, confirmPassword , role}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/signup`,
      { name, email, password, confirmPassword, role },
      { withCredentials: true }
    );
    if (!response) {
      throw new Error("No response from server");
    }
    return response?.data;
  } catch (err) {
    console.log("Error in signupAPI:", err);
  }
};

export default signupAPI;
