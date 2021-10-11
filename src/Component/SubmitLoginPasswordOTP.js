import React, { Component } from 'react'
import UserService from '../Services/UserService'
import Cookie from "js-cookie";

 class SubmitLoginPasswordOTP extends Component {
     constructor(props){
         super(props);
         this.state={
             oldPassword:"",
             newPassword:"",
             retrynewPassword:"",
             userinfo: Cookie.getJSON("loginInfo"),
             errors:{}
         }
         this.handleSubmit=this.handleSubmit.bind(this);
     }
     handleSubmit = (e) => {
         if (this.validatePassword()){
             e.preventDefault();
         }else {
            if(this.state.userinfo.username===null){
                const userDetails="userinfo";
              UserService.loaduserinfo(userDetails).then(res=>{
                  if(res.status===200){
                      console.log(res.data)
                    //   Cookie.set("userinfo",JSON.stringify(res.data))
                    this.setState({userinfo:res.data})
                  }
              });
              
            }

             let updatePassword = { username:this.state.userinfo.username,oldPassword: this.state.oldPassword, newPassword: this.state.newPassword }
             UserService.updateloginPassowrd(updatePassword).then(res => {
                 if (res.status === 200) {
                     alert(res.data);
                     this.props.history.push("/userDashboard");
                 } else{
                    alert(res.data);
                    this.props.history.push("/userDashboard");
                 }
                     
             })
         }
     }
     validatePassword(){
        let errors = {};
        let isValid = false;
        if(!this.state.oldPassword){
            isValid = true;
            errors["oldPassword"] = "Please enter your oldPassword.";
           }
           if(!this.state.newPassword){
            isValid = true;
            errors["newPassword"] = "Please enter your newPassword.";
           }
           if(!this.state.retrynewPassword){
            isValid = true;
            errors["retrynewPassword"] = "Please enter your retrynewPassword.";
           }
           if(this.state.newPassword!==this.state.retrynewPassword){
            isValid = true;
            errors["retrynewPassword"] = "Password does not match.";
           }
           this.setState({
            errors: errors
          });
          return isValid;
     }
    render() {
        
        return (
            <div>
             <div className="accountDetail">
                    <p> Change Login Password</p>
                </div>
                <form onSubmit={this.handleSubmit}>
                <div className="submit-login-password">
                <label className={this.state.errors.oldPassword? 'text-danger':null}>{this.state.errors.oldPassword? this.state.errors.oldPassword:'Old Login Password *'}</label>
                <input type="password" name="oldPassword" onChange={(e)=>this.setState({oldPassword:e.target.value})}/>
                <label className={this.state.errors.newPassword? 'text-danger':null}>{this.state.errors.newPassword? this.state.errors.newPassword:'New Login Password *'}</label>
                <input type="password" name="newPassword" onChange={(e)=>this.setState({newPassword:e.target.value})}/>
                <label className={this.state.errors.retrynewPassword? 'text-danger':null}>{this.state.errors.retrynewPassword? this.state.errors.retrynewPassword:'Re try Login Password *'}</label>
                <input type="password" name="retrynewPassword" onChange={(e)=>this.setState({retrynewPassword:e.target.value})}/> 
                <div>
                    <input type="submit" value="Submit"/>
                    {/* <input type="submit" value="Reset"/> */}
                </div>
                </div>
                </form>
            </div>
        )
    }
}

export default SubmitLoginPasswordOTP
