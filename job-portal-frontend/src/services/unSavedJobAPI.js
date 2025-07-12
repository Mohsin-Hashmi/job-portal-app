
import { BASE_URL } from "../utils/constant";
import axios from "axios";

const unSavedJobAPI = async(jobId)=>{
    try{
        const response = await axios.delete(`${BASE_URL}/jobs/${jobId}/unsave`, {withCredentials: true});
        if(response?.data?.success){
            return response?.data?.savedJobs
        }else{
            console.log("Error in unsaved job API");
        }
    }catch(err){
        console.log("Error in unsaved job API")
    }
}

export default unSavedJobAPI