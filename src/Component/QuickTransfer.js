import React, { Component } from 'react'

 class QuickTransfer extends Component {
    render() {
        return (
            <div className="quick-transfer-body">
                <div className="transferinfo">
                <p>Select the account which you wish to transfer funds</p> 
                </div>
                    <div className="quick-trasfer-account-info">
                        <div className="quck-transfer-account-table">
                            <table id="quick-transfer-header">
                                <tr>
                                    <th>Account NO</th>
                                    <th>Account Type</th>
                                    <th>Branch</th>
                                    <th>Balance</th>
                                </tr>
                                <tr>
                                    <td>62242887981</td>
                                    <td>Saving Account</td>
                                    <td>Gayathir Nagar</td>
                                    <td>163.00</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <div className="quick-transfer-select-account">
                      <div className="select-account">
                            <label>Beneficiary Name*</label>
                            <input type="beneficiaryname" name="beneficiaryname"/> 
                        </div>
                        <div className="select-account1">
                            <label>Beneficiary Account Number*</label>
                            <input type="accountnumber" name="accountnumber"/> 
                        </div>
                        <div className="select-account2">
                            <label>Re-Enter Beneficiary Account Number*</label>
                            <input type="reaccountnumber" name="accountnumber"/> 
                      </div>
                      <div className="select-account3">
                            <label>Payment Option*</label>
                            <input type="paymentOption" name="accountnumber"/> 
                      </div>
                      <div className="select-account4">
                            <label>Amount*</label>
                            <input type="amount" name="accountnumber"/> 
                      </div>
                      <div className="select-account5">
                            <label>Purpose*</label>
                            <select className="purpose" id="purpose">
                            <option value="volvo">Volvo</option>
                             <option value="saab">Saab</option>
                             </select>
                      </div>
                      <div className="select-account5">
                            <button className="submitTransfer">Submit</button>
                            <button className="submitTransfer">Cancel</button>
                      </div>
                    </div>
            </div>
        )
    }
}

export default QuickTransfer
