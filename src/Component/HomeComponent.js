import React from 'react';
import { Link } from 'react-router-dom';
import loginimage from '../loginimage.png';
import './Home.css';
//import axios from 'axios';
//import { useSelector, useDispatch } from 'react-redux';


class  HomeSComponent extends React.Component {
  constructor(props){
    super(props);
    this.state={

    }
    //this.userSignin=this.userSignin.bind(this);
  }
  userSignin=(e)=>{
    e.preventDefault();
    this.props.history.push("/signin")
  }
render(){
  return (
    <div className="home-container">
        <div className="login-container">
                <div className="personal-container">
                  <div className="login-image">
                    <img className="loginimage" src={loginimage} alt="loginimage"/>
                      <p className="bankinginfo">PERSONAL BANKING</p>
                      <div className="loginbutton">
                        <button className="button login-button" onClick={this.userSignin}>LOGIN &#10219;</button>
                      </div>
                  </div>
                  <div className="belowLogSec">
                  <p>&nbsp;</p>
                </div>
              <ul className="newUser">
                <li><Link to="/register">New User Registration |</Link></li>
                <li><Link to="/category/Shirts">How Do I |</Link></li>
                <li><Link to="/category/Shirts">Customer Care |</Link></li>
                <li><Link to="/category/Shirts">Unlock User |</Link></li>
              </ul>
                </div>
              <div className="corporate-container">
                <div className="login-image">
                  <img className="loginimage" src={loginimage} alt="loginimage"/>
                  <p className="bankinginfo">CORPORATE BANKING</p>
                  <div className="loginbutton">
                    <button className="button login-button"><Link to ="/signin">LOGIN &#10219;</Link></button>
                  </div>
                </div>
                  <div className="belowLogSec">
                    <p>&nbsp;</p>
                  </div>
                <ul className="newUser">
                  <li><Link to="/category/Shirts">New User Registration |</Link></li>
                  <li><Link to="/category/Shirts">How Do I |</Link></li>
                  <li><Link to="/category/Shirts">Customer Care |</Link></li>
                  <li><Link to="/category/Shirts">Unlock User |</Link></li>
                </ul>
              </div>
              
            </div>
            <div className="body-container">
              <div className="marque-container">
                <marquee className="marquee-text">The new SBI Internet Banking URL will be  “onlinesbi.sbi”. | Dear Customer, if you have donated for PM CARES through SBI Internet Banking, you can download the Receipt from PMCares portal of govt. using the reference number available with you.    |    In terms of RBI COVID-19 regulations, you can defer the EMIs on Term Loans falling due between 01.03.2020 to 31.05.2020, please </marquee>
              </div>
              <div className="other-links-container">
                <div className="inside-other-link1">
                  <div className="other-link">
                    <div className="each-link"> <Link to="/category/Shirts">&raquo; SBI FastTag </Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; SBI CAP Securities</Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; SBI Life Insurance</Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; SBI General Insurance </Link></div>
                  </div>
                </div>
                <div className="inside-other-link2">
                <div className="other-link">
                    <div className="each-link"> <Link to="/category/Shirts">&raquo; SBI Mutual Fund </Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; SBICAP Trustee Company Ltd </Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; SBI Card</Link></div>
                   
                  </div>
                  
                </div>
                <div className="inside-other-link3">
                <div className="other-link">
                    <div className="each-link"> <Link to="/category/Shirts">&raquo; NRI Services </Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; SBI Express Remit</Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; OnlineSBI Global </Link></div>
                    
                  </div>
                  
                </div>
                <div className="inside-other-link4">
                <div className="other-link">
                    <div className="each-link"> <Link to="/category/Shirts">&raquo; Customer Complaint Form </Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; Customer Request and Complaint Form</Link></div>
                    <div className="each-link"><Link to="/category/Shirts">&raquo; Foreign Travel/EZ-Pay/Gift Cards</Link></div>
                   
                  </div>
                  
                </div>
              </div>
            </div>
        </div>
  );
}
}
export default HomeSComponent;
