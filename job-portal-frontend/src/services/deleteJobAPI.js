
import { BASE_URL } from "../utils/constant";
import axios from "axios";
const deleteJobAPI =async (jobId)=>{
    try{
        const response = await axios.delete(`${BASE_URL}/jobs/delete-job/${jobId}`, {withCredentials: true})
        console.log("deleted job is", response);
        return response.data.data.deleted_Job_is;
    }catch(err){
        console.log('Error in delete job API');
    }
}

export default deleteJobAPI;