import React, { Component } from 'react'
import OTPImage from '../otp_image.png';
import SubmitLoginPasswordOTP from './SubmitLoginPasswordOTP';
import {Route, Link,Switch } from 'react-router-dom';
import UserService from '../Services/UserService'
import Cookie from "js-cookie";

 class LoginPasswordChange extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
            checked: false,
            userinfo: Cookie.getJSON("userinfo"),
            otp:"" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
      }
    
      handleChange() {
        this.setState({
          checked: true
         
        })
        if(this.state.userinfo===undefined){
           UserService.loaduserinfo("userinfo").then(res=>{
            this.setState({ userinfo:res.data})
            UserService.generateOTP(this.state.userinfo.person.firstname);
           });
        }
           else
            UserService.generateOTP(this.state.userinfo.person.firstname);
      }
      handleSubmit(){
          let OtopInfo={username:this.state.userinfo.firstname,otp:this.state.otp}
        UserService.submitLoginOTP(OtopInfo).then(res=>{
            if(res.status===200){
                alert(res.data);
              this.props.history.push("/userDashboard/accountprofile/loginpasswordchange/submitloginpasswordotp");
            }
            else
            alert(res.data);
        })
          
      }
      
    render() {
        const content = this.state.checked ? <div> <div className="login-password-otp-header-info">
                    <span>Enter the One Time Password Send to your Mobile Number</span>
                </div>
                <div className="login-password-enter-otp">
                    <label className="login-password-enter-otp-label"> One Time Password*
                        <input type="enterotp" name="otp" id="login-password-enter-otp" onChange={(e) => this.setState({ otp: e.target.value })} required/>
                    </label>
                    
                </div>
                <div>
               <button className="login-password-otp-submit" onClick={this.handleSubmit}>Submit</button>
                </div>
                <div className="login-password-otp-image">
                    <img src={OTPImage} alt="OTPImage"/>
                </div> </div>: null;
        return (
            <div className="login-password-body">
                <div className="accountDetail">
                    <p> Change Login Password</p>
                </div>
                <div className="login-password-select-mode">
                    <span> Select the Mode:</span>
                </div>
                <div className="login-password-generate-otp">
                    <span className="login-password-label-name"> Generate One Time Password(OTP)
                         <input type="checkbox" name="loginOtp" id="login-password-checkbox" checked={ this.state.checked } onChange={ this.handleChange } />
                    </span>
                </div>
                
                { content }
                <Switch>
                    <Route exact path="/userDashboard/accountprofile/loginpasswordchange/submitloginpasswordotp">
                    <SubmitLoginPasswordOTP/>
                    </Route>
                </Switch>
               
            </div>
        )
    }
}

export default LoginPasswordChange
