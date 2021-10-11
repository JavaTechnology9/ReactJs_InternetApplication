import React from 'react';
import { Redirect } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import UserService from '../Services/UserService'
import './Login.css';
import img_login_image from '../Java_Technology.png';
import Cookie from "js-cookie";


class SigninComponent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      username:"",
      password:""
    }
    this.submitHandler=this.submitHandler.bind(this);
    this.register=this.register.bind(this);
  }
  submitHandler = (e) => {
    e.preventDefault();
    let userinfo = { username: this.state.username, password: this.state.password }
    Cookie.set("loginInfo",JSON.stringify(userinfo))
    console.log("userinfo =>" + JSON.stringify(userinfo));
    UserService.validateSigninInfo(userinfo).then(res => {
      console.log("RETURNED DATA" + res.data)
      console.log("RETURNED DATA" + res.status)
      if (res.status === 200 && res.data!="")  {
        Cookie.set("accountInfo",JSON.stringify(res.data))
        
        this.props.history.push("/userDashboard");
        window.location.reload(false);
      } else if(res.status === 202 && res.data!="" && res.data.message!="" ){
        alert(res.data.message)
        this.props.history.push("/")
      }
      else{
        alert("account is not activated to activate check your register email")
        this.props.history.push("/")
      }
    });

  }
  register(){
    this.props.history.push("/register")
  }
  render() {
    return (
      <div className="login-form-container">
        <div className="login-sub-form-container">
          <div className="form-header">
            <h2>Sign In</h2>
          </div>
          <form onSubmit={this.submitHandler}>
            <div className="textname">
              <label htmlFor="username" id="fontsize">Username</label>
              <input type="text" id="username" name="username" placeholder="Username.." onChange={(e) => this.setState({username:e.target.value})}/>
              <label htmlFor="password" id="fontsize">Password</label>
              <input type="password" id="fname" name="password" placeholder="Password.." onChange={(e) => this.setState({password:e.target.value})}/>
              <input type="submit" value="Submit"/>
              
            </div>
          </form>
          <div id="newUser">
            <label htmlFor="newUser" id="fontsize">New User Registration</label>
            <input type="submit" value="Register" onClick={this.register}/>
          </div>
        </div>
        <div className="login-sub-form-container2">
          <div className="image-form">
            <div className="image-width">
              <img id="slideimage" src={img_login_image} alt="loginimage" />
            </div>
          </div>

        </div>
      </div>
    )
  }
}
export default SigninComponent;