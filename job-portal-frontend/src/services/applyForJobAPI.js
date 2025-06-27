import { BASE_URL } from "../utils/constant";
import axios from "axios";
const applyForJob = async ({
  fullName,
  email,
  phoneNumber,
  resumeFile,
  coverLetter,
  linkedInProfileLink,
  gitHubProfileLink,
  portfolioProfileLink,
  startDate,
  aboutYourSelf,
}) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/jobs/apply`,
      {
        fullName,
        email,
        phoneNumber,
        resumeFile,
        coverLetter,
        linkedInProfileLink,
        gitHubProfileLink,
        portfolioProfileLink,
        startDate,
        aboutYourSelf,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      }
    );

    if (!response) {
      throw new Error("No response from server");
    }
    return response?.data;
  } catch (err) {
    console.log(err);
  }
};

export default applyForJob;
