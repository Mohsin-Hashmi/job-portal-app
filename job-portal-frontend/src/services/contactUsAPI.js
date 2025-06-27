

import axios from 'axios';
import { BASE_URL } from '../utils/constant';
const contactUsAPI= async({firstName, lastName, email, phoneNumber, message})=>{
    try{
        const response = await axios.post(`${BASE_URL}/auth/contactus`, {firstName, lastName, email, phoneNumber, message}, {withCredentials: true})
        if(!response){
            throw new Error("No response from server");
        }
        return response?.data;
    }catch(err){
        console.log("Error in Contact us API ", err);
    }
}

export default contactUsAPI;