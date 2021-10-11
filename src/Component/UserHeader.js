import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../App.css';
import '../Title.css';
import './AccountProfile.css';

import AccountProfiles from './AccountProfiles';
import PaymentTransfers from './PaymentTransfers';
import BillPayments from './BillPayments';
import FixedDeposits from './FixedDeposits';
import ETax from './ETax';
import EServices from './EServices';
import RequestEnquires from './RequestEnquires';
import UsefulLinks from './UsefulLinks';


 export class UserHeader extends Component {
   constructor(props){
     super(props);
     console.log(this.props)
   }
    render() {
        return (
            <BrowserRouter>
            <div className="userheader">
                <Link to="#" className="userheaderlogo">JAVA BANK</Link>
                <div className="header-right">
                    <Link className="userheaderFields" to="/userDashboard/accountprofile">My Account & Profile</Link>
                    <Link className="userheaderFields" to="/userDashboard/paymenttransfer">Payments & Transfers</Link>
                    <Link className="userheaderFields" to="/userDashboard/billpayments">Bill Payments</Link>
                    <Link className="userheaderFields" to="/userDashboard/fixeddeposits">Fixed Deposit</Link>
                    <Link className="userheaderFields" to="/userDashboard/etax">E Tax</Link>
                    <Link className="userheaderFields" to="/userDashboard/eservices">E-Services</Link>
                    <Link className="userheaderFields" to="/userDashboard/requestenquires">Request & Enquires</Link>
                    <Link className="userheaderFields" to="/userDashboard/usefullinks">Useful Links</Link> 
                    <Link className="userheaderFields" to="/userDashboard/userLogout">LOGOUT</Link> 
                </div>
            </div>
              <main className="main">
                <div className="content">
                  <Route path="/userDashboard/accountprofile" component={AccountProfiles} />
                  <Route path="/userDashboard/paymenttransfer" component={PaymentTransfers} />
                  <Route path="/userDashboard/billpayments" component={BillPayments} />
                  <Route path="/userDashboard/fixeddeposits"  component={FixedDeposits} />
                  <Route path="/userDashboard/etax"  component={ETax} />
                  <Route path="/userDashboard/eservices"  component={EServices} />
                  <Route path="/userDashboard/requestenquires"  component={RequestEnquires} />
                  <Route path="/userDashboard/usefullinks"  component={UsefulLinks} />
                 
                </div>
              </main>
              {/* <footer className="footer">USER All right reserved.</footer> */}
           
          </BrowserRouter>
        );
        
    }
}

export default UserHeader;
