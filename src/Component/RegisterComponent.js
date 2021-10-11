import React from 'react';
// import { Link } from 'react-router-dom'
import { notify } from 'react-notify-toast'
import UserService from '../Services/UserService'
import '../Title.css';
import img_cashback_amazon from '../img_cashback_10.jpg';
import img_cashback_travel from '../img_cashback_travel.jpg';
import img_cashback_additional from '../img_cashback_additional.jpg';
import img_cashback_10 from '../img_cashback_10.jpg';
import Popup from './Popup';
import axios from 'axios';
import Cookie from "js-cookie";
// import Slider from "react-slick"; 
import Carousel from 'react-bootstrap/Carousel' ;
// //import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import "slick-carousel/slick/slick.css";  
// import "slick-carousel/slick/slick-theme.css"; 
class RegisterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      repassword: "",
      email: "",
      mobilenumber: "",
      isPrimaryPhone: false,
      gender: "",
      address1: "",
      address2: "",
      address3: "",
      city: "",
      stateName: "",
      zipcode: "",
      sortname:"",
      showPopup: false,
      status:"",
      errors:{}
     

      //  genderOptions: [
      //   { name: 'Male', id: 1 },
      //   { name: 'Female', id: 2 },
      //   { name: 'Others', id: 3 }

      // ]
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.validate=this.validate.bind(this);
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

    handleFormSubmit=(event)=> {
    //e.preventDefault();
    let customer = {
      firstname: this.state.firstname, lastname: this.state.lastname, username: this.state.username,
      email: this.state.email, password: this.state.password, repassword: this.state.repassword, mobilenumber: this.state.mobilenumber,
      isPrimaryPhone: this.state.isPrimaryPhone, gender: this.state.gender, address1: this.state.address1, address2: this.state.address2, address3: this.state.address3,
      city:this.state.city,stateName:this.state.stateName,zipcode:this.state.zipcode
    }
    if(this.validate()){
      //alert("password doesn't match!");
      event.preventDefault();
    }else{
        UserService.saveUser(customer).then(res=>{
          console.log(res.data);
          if(res.status===200){
            Cookie.set("userinfo",JSON.stringify(res.data))
            this.togglePopup();
            this.setState({ status:res.status })
            alert("check your Register email to activate your account")
            this.props.history.push('/')
          }
         
          
        });
        this.props.history.push('/signin')
    }

  }
  validate() {
    //this.props.history.push("/signin")
    let errors = {};
    let isValid = false;
   if(!this.state.firstname){
    isValid = true;
    errors["firstname"] = "Please enter your firstName.";
   }
   if(!this.state.lastname){
    isValid = true;
    errors["lastname"] = "Please enter your lastName.";
   }
   if(!this.state.email){
    isValid = true;
    errors["email"] = "Please enter your Email.";
   }
   if(!this.state.username){
    isValid = true;
    errors["username"] = "Please enter your username.";
   }
   if(!this.state.password){
    isValid = true;
    errors["password"] = "Please enter your password.";
   }
   if(!this.state.repassword){
    isValid = true;
    errors["repassword"] = "Please enter your repassword.";
   }
   if(!this.state.mobilenumber){
    isValid = true;
    errors["mobilenumber"] = "Please enter your mobilenumber.";
   }
   if(this.state.password!==this.state.repassword){
    isValid = true;
    errors["repassword"] = "Password does not match.";
   }
   this.setState({
    errors: errors
  });

  return isValid;
  }
  handleInput = (e) => {
    let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    let name = e.target.name;
    this.setState(prevState => {
      return {
        person: {
          ...prevState, [name]: value
        }
      }
    }
    )
  }
  render() {
  //   const breakpoints = [
  //     {width:1, iteamsToShow:1},
  //     {width:1, iteamsToShow:1},
  //     {width:1, iteamsToShow:1},
  //     {width:1, iteamsToShow:1}
  // ]
    return (
      <div className="form-main-container">
        
        <div className="form-sub-container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-header">
            <h2> Create Account</h2>
            {this.state.showPopup ? 
              <Popup
                text='Email Send, Check your inbox to confirm'
                closePopup={this.togglePopup.bind(this)}
              />
              : null
        }
          </div>
          <div className="input-form">
          
            <div className="input-form-1">
                           
              <label htmlFor="firstname" className={this.state.errors.firstname? 'text-danger':null}>{this.state.errors.firstname? this.state.errors.firstname:'First Name*'}</label>
              <input type="text" name="firstname" id="firstname" onChange={(e) => this.setState({ firstname: e.target.value })}/>
              
              <label htmlFor="username" className={this.state.errors.username? 'text-danger':null}> {this.state.errors.username? this.state.errors.username:'User Name*'}</label>
              <input type="text" name="username" id="username" onChange={(e) => this.setState({ username: e.target.value })}/>
   
             
              <label htmlFor="rePassword" className={this.state.errors.repassword? 'text-danger':null}>{this.state.errors.repassword? this.state.errors.repassword:'Re-Enter Password*'}</label>
              <input type="password" id="repassword" name="repassword" onChange={(e) => this.setState({ repassword: e.target.value })}/>
              {/* <span className="text-danger">{this.state.errors.repassword}</span> */}
             
              
              <label htmlFor="mobileNumber" className={this.state.errors.mobileNumber? 'text-danger':null}>{this.state.errors.mobileNumber? this.state.errors.mobileNumber:'MobileNumber*'} </label>
              <input type="text" name="mobileNumber" id="mobileNumber" onChange={(e) => this.setState({ mobilenumber: e.target.value })}/> 
             
              <label htmlFor="checkbox">isPrimaryPhone  </label>
              <input type="checkbox" name="isPrimaryPhone" id="isPrimaryPhone" onChange={(e) => this.setState({ isPrimaryPhone: e.target.checked })} checked={this.state.isPrimaryPhone}/>
              {/* <p>&nbsp;</p> */}
              <label htmlFor="address1">Address1</label>
              <input type="text" name="address1" id="address1" onChange={(e) => this.setState({ address1: e.target.value })}/> 
              <label htmlFor="address3">Address3 </label>
              <input type="text" name="address3" id="address3" onChange={(e) => this.setState({ address3: e.target.value })}/>
              <label htmlFor="zipcode">Zipcode </label>
              <input type="text" name="zipcode" id="zipcode" onChange={(e) => this.setState({ zipcode: e.target.value })}/>
            </div>
            <div className="input-form-2">
            
              <label htmlFor="lastname" className={this.state.errors.lastname? 'text-danger':null}>{this.state.errors.lastname? this.state.errors.lastname:'Last Name* '} </label>
              <input type="text" name="lastname" id="lastname" onChange={(e) => this.setState({ lastname: e.target.value })} />
              
             
              <label htmlFor="password" className={this.state.errors.password? 'text-danger':null}>{this.state.errors.password? this.state.errors.password:'Enter Password* '} </label>
              <input type="password" id="password" name="password" onChange={(e) => this.setState({ password: e.target.value })} />
             
            
              <label htmlFor="email" className={this.state.errors.email? 'text-danger':null}>{this.state.errors.email? this.state.errors.email:'Enter Email* '}  </label>
              <input type="email" name="email" id="email" onChange={(e) => this.setState({ email: e.target.value })} />
              
              <label htmlFor="gender">Gender </label>
              <select className="genderSelect" value={this.state.gender} onChange={(e) => this.setState({ gender: e.target.value })}>
                <option value="">select</option>
                <option value="Male">Male</option>
                <option value="FeMale">FeMale</option>
                <option value="Others">Others</option>
              </select>
              <label htmlFor="address2">Address2</label>
              <input type="text" name="address2" id="address2" onChange={(e) => this.setState({ address2: e.target.value })} />
              <label htmlFor="city"> City </label>
              <input type="text" name="city" id="city" onChange={(e) => this.setState({ city: e.target.value })} />
              <label htmlFor="State"> State</label>
              <input type="text" name="stateName" id="stateName" onChange={(e) => this.setState({ stateName: e.target.value })} />
            </div>
            
          </div>
          <div className="form-footer">
          <input type="submit" value="Register"/>
          </div>
          </form>
        </div>
        <div className="form-sub-container2">
        <div className="slideshow-container">
            <Carousel>
              <Carousel.Item>
                <img className="slideimage" src={img_cashback_10} alt="loginimage" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="slideimage" src={img_cashback_additional} alt="loginimage" />
{/* 
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item>
                <img className="slideimage" src={img_cashback_amazon} alt="loginimage" />
              </Carousel.Item>
              <Carousel.Item>
              <img className="slideimage" src={img_cashback_travel} alt="loginimage"/>
              </Carousel.Item>
            </Carousel>
        </div>
       
        </div>
      </div>
    )
  }
}
export default RegisterComponent;