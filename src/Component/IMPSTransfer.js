import React, { Component } from 'react'
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';

 class IMPSTransfer extends Component {
    render() {
        return (
            <div className="quick-transfer-body">
                <div className="transferinfo">
                <p>IMPS Funds Transfer</p> 
                </div>
                    <div className="quick-trasfer-account-info">
                        <div class="quck-transfer-account-table">
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
                      <div className="transferinfo">
                      <Link to="/userDashboard/paymenttransfer/AddManageBebeficiary"><p> Add manage Beneficiary</p></Link> 
                      </div>
                      <div className="transferinfo">
                        <p>Select the Beneficiary Account</p> 
                      </div>
                      <div class="quck-transfer-account-table">
                            <table id="quick-transfer-header">
                            <thead>
                                <tr>
                                    <th>Select</th>
                                    <th>Account NO</th>
                                    <th>Beneficiary Name</th>
                                    <th>Branch</th>
                                    <th>Limit</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                <td><input type="checkbox"/></td>
                                    <td>62242887981</td>
                                    <td>Bushaboina Suresh</td>
                                    <td>Gayathir Nagar</td>
                                    <td>163.00</td>
                                </tr>
                                <tr>
                                <td><input type="checkbox"/></td>
                                    <td>62242887981</td>
                                    <td>Bushaboina Suresh</td>
                                    <td>Gayathir Nagar</td>
                                    <td>163.00</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        <div className="selected-account-number">
                            <span>Selected Account Number</span>
                        </div>
                        <div className="selected-account-number">
                            <label>Select payment options </label>
                            <div className="payment-checkbox">
                                <input type="checkbox" id="payment-checkbox_id"/>Pay Now
                            </div>
                            <div className="payment-checkbox">
                                <input type="checkbox" id="payment-checkbox_id"/>Schedule Later
                            </div>
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

export default IMPSTransfer
