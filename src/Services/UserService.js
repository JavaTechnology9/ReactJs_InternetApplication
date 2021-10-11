
import axios from 'axios';
// import ajax from 'superagent';
const homeURL="http://localhost:9090";
//const saveUserURL="http://localhost:9090/user/saveUser";

class UserService {

     validateSigninInfo(user){
        return axios.post(homeURL+"/user/loginUser",user);
    }
      saveUser(user){
    
    
         return  axios.post(homeURL+"/user/saveUser",user);
        
       
    }
    validateTiken(id){
        return  axios.post(homeURL+"/user/validateToken",id);
    }
    generateOTP(name){
        return  axios.post(homeURL+"/user/generateOTP",name);
    }
    loaduserinfo(info){
        return  axios.post(homeURL+"/user/loaduserinfo",info);
    }
    submitLoginOTP(OtopInfo){
        return  axios.post(homeURL+"/user/submitOTP",OtopInfo);
    }
    updateloginPassowrd(updateloginPassowrd){
        return  axios.post(homeURL+"/user/updateloginPassowrd",updateloginPassowrd);
    }
}
export default new UserService();
