import axios from "axios";
import { BASE_URL } from "../utils/constant";
export const loginAPI = async ({ email, password }) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/auth/login`,
      { email, password },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response) {
      throw new Error("No response from server");
    }
    console.log("login response is :", response)
    return response.data;
  } catch (err) {
    console.log("Error in loginAPI:", err);
  }
};
