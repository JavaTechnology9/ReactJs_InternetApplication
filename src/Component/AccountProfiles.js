import React, { Component } from 'react'
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import './AccountProfile.css';
import AccountSummary from './AccountSummary';
import AccountProfile from './AccountProfile';
import AccountStatement from './AccountStatement';
import LoginPasswordChange from './LoginPasswordChange';
import UserProfile from './UserProfile';
import PendingStatement from './PendingStatement';
import KnowYourCibil from './KnowYourCibil';
import SubmitLoginPasswordOTP from './SubmitLoginPasswordOTP';

 class AccountProfiles extends Component {
     constructor(props){
         super(props);
         let today = new Date(),
            date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate()+'['+today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()+' IST]';
           this.state={
               currentDate:date
           }
     }
    render() {
        return (
            <div className="accountprofile">
                <div className="accountleftSidebar">
                <div className="userinformation">
                    <p className="dateinfo">
                    { this.state.currentDate}
                    </p>
                </div>
                    <button className="accountSummary">AccountSummary</button>
                    <button className="accountSummary">AccountStatement</button>
                    <button className="accountSummary">Login Password change</button>
                    <button className="accountSummary">Profile</button>
                    <button className="accountSummary">Pending Statement</button>
                    <button className="accountSummary">Know Your CIBIL Score</button>

                </div>
                <div className="accountrightSidebar">
                <Switch>
                    <Route  exact path="/userDashboard/accountprofile" component={AccountProfile}/>
                    <Route  exact path="/userDashboard/accountprofile/accountsummary" component={AccountSummary}/>
                    <Route exact path="/userDashboard/accountprofile/accountstatement" component={AccountStatement}/>
                    <Route exact path="/userDashboard/accountprofile/loginpasswordchange" component={LoginPasswordChange}/>
                    <Route exact path="/userDashboard/accountprofile/userprofile" component={UserProfile}/>
                    <Route exact path="/userDashboard/accountprofile/pendingstatement" component={PendingStatement}/>
                    <Route exact path="/userDashboard/accountprofile/knowyourcibil" component={KnowYourCibil}/>
                    <Route exact path="/userDashboard/accountprofile/loginpasswordchange/submitloginpasswordotp" component={SubmitLoginPasswordOTP}/>
                </Switch>
                    
                </div>
            </div>
        )
    }
}

export default AccountProfiles
