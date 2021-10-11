import React, { Component } from 'react'
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import TransactionImage from '../Transaction_Image.png';
import TransactionImage2 from '../Transaction_Image2.jpg';
import TransactionImage3 from '../Transaction_Image3.png';
import TransactionImage4 from '../Transaction_Image4.png';

 class PaymentTransfer extends Component {
    render() {
        return (
            <div className="accountSummaryDetails">
            <div className="accountDetail">
                <p> Funds Transfer</p>
            </div>
            <div className="userPaymentTransafer">
                    <div className="userAddBeneficiary">
                    <img className="transaction_image" src={TransactionImage} alt="TransactionImage"/>
                        <div className="quickTransfer">
                           <Link to="/userDashboard/paymenttransfer/quickTransfer"><p>Quick Transfer (WithOut adding Beneficiary)</p></Link>
                        </div>
                        <img className="transaction_image" src={TransactionImage2} alt="TransactionImage"/>
                        <div className="manageBeneficiary">
                          <Link to="/userDashboard/paymenttransfer/AddManageBebeficiary"><p> Add manage Beneficiary</p></Link>
                        </div>
                    </div>
                    <div className="userAddBeneficiary">
                    <img className="transaction_image" src={TransactionImage3} alt="TransactionImage"/>
                        <div className="FundsTransfer">
                            <p>Funds Transfer(Own Account)</p>
                        </div>
                        <img className="transaction_image" src={TransactionImage4} alt="TransactionImage"/>
                        <div className="accounts-to-others">
                        <Link to="/userDashboard/paymenttransfer/AccountOfOthersWithInBank"> <p> Accounts of Others -with in Same Bank</p></Link>
                        </div>
                    </div>
                    <div className="userAddBeneficiary">
                    <img className="transaction_image" src={TransactionImage} alt="TransactionImage"/>
                        <div className="other-bank-transfer">
                        <Link to="/userDashboard/paymenttransfer/IMPSTransfer"> <p>Other Bank Transfer </p></Link>
                        </div>
                        <img className="transaction_image" src={TransactionImage2} alt="TransactionImage"/>
                        <div className="IMPS-transfer">
                        <Link to="/userDashboard/paymenttransfer/IMPSTransfer"> <p> IMPS Transfer</p></Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default PaymentTransfer
