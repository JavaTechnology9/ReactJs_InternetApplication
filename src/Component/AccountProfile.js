import React, { Component } from 'react'
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import TransactionImage from '../Transaction_Image.png';
import TransactionImage2 from '../Transaction_Image2.jpg';
import TransactionImage3 from '../Transaction_Image3.png';
import TransactionImage4 from '../Transaction_Image4.png';

 class AccountProfile extends Component {
    render() {
        return (
            <div className="accountSummaryDetails">
            <div className="accountDetail">
                <p> My Account</p>
            </div>
            <div className="userPaymentTransafer">
            <div className="userAddBeneficiary">
                    <img className="transaction_image" src={TransactionImage} alt="TransactionImage"/>
                        <div className="quickTransfer">
                        <Link to ="/userDashboard/accountprofile/accountsummary">Account Summary</Link>
                        </div>
                        <img className="transaction_image" src={TransactionImage2} alt="TransactionImage"/>
                        <div className="manageBeneficiary">
                        <Link to="/userDashboard/accountprofile/accountstatement"><p> Account Statement</p></Link>
                        </div>
                    </div>
                    <div className="userAddBeneficiary">
                    <img className="transaction_image" src={TransactionImage3} alt="TransactionImage"/>
                        <div className="FundsTransfer">
                        <Link to="/userDashboard/accountprofile/loginpasswordchange"><p>Login Password Change</p></Link>
                        </div>
                        <img className="transaction_image" src={TransactionImage4} alt="TransactionImage"/>
                        <div className="accounts-to-others">
                        <Link to="/userDashboard/accountprofile/userprofile"><p> Profile </p></Link>
                        </div>
                    </div>
                    <div className="userAddBeneficiary">
                    <img className="transaction_image" src={TransactionImage} alt="TransactionImage"/>
                        <div className="other-bank-transfer">
                        <Link to="/userDashboard/accountprofile/pendingstatement"> <p>Pending Statement </p></Link>
                        </div>
                        <img className="transaction_image" src={TransactionImage2} alt="TransactionImage"/>
                        <div className="IMPS-transfer">
                        <Link to="/userDashboard/accountprofile/knowyourcibil"> <p> Know Your CIBIL Score</p></Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default AccountProfile
