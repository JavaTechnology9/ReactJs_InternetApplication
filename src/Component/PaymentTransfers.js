import React, { Component } from 'react'
import {Route, Link,Switch } from 'react-router-dom';
import PaymentTransfer from './PaymentTransfer';
import QuickTransfer from './QuickTransfer';
import AddManageBebeficiary from './AddManageBebeficiary';
import AccountOfOthersWithInBank from './AccountOfOthersWithInBank';
import IMPSTransfer from './IMPSTransfer';

 class PaymentTransfers extends Component {
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
                <Link to="/userDashboard/paymenttransfer"><button className="accountSummary">Funds Transfer</button></Link>
                    <button className="accountSummary">Other Payment/ Receipt</button> 
                    <button className="accountSummary">Other Request</button>
                    <button className="accountSummary">VAN(Vitual account number)</button>
                    <button className="accountSummary">International Fund Transfer</button>
                    <button className="accountSummary">Know Your CIBIL Score</button>
                </div>
                <div className="accountrightSidebar">
                <Switch>
                    <Route exact path="/userDashboard/paymenttransfer">
                     <PaymentTransfer/>
                    </Route>
                    <Route exact path="/userDashboard/paymenttransfer/quickTransfer">
                     <QuickTransfer/>
                    </Route>
                    <Route exact path="/userDashboard/paymenttransfer/AddManageBebeficiary">
                     <AddManageBebeficiary/>
                    </Route>
                    <Route exact path="/userDashboard/paymenttransfer/AccountOfOthersWithInBank">
                     <AccountOfOthersWithInBank/>
                    </Route>
                    <Route exact path="/userDashboard/paymenttransfer/IMPSTransfer">
                     <IMPSTransfer/>
                    </Route>
                    
                    
                </Switch>
                    
                </div>
            </div>
        )
    }
}

export default PaymentTransfers
