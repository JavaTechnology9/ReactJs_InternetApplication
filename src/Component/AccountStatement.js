import React, { Component } from 'react'

export class AccountStatement extends Component {
    render() {
        return (
            <div className="accountSummaryDetails">
                <div className="accountDetail">
                    <p> Account Statement</p>
                </div>
                
                <div className="account-statement-summary">
                    <div className="account-statement-info">
                      <span> Select an account</span>
                    </div>
                    <div className="account-statement-acccountinfo">
                        <span className="account-statement-acccount-span"> Account No.</span>
                        <span className="account-statement-acccount-span"> Account Type</span>
                        <span className="account-statement-acccount-span"> Branch</span>
                    </div>
                    <div>
                        <input type="checkbox" name="account-statement-checkbox" id="account-statement-checkbox"/><span className="account-statement-acccount-span"> 62242887981</span>
                        <span className="account-statement-acccount-span"> Saving</span>
                        <span className="account-statement-acccount-span"> Gayathri Nagar</span>
                    </div>
                    <div className="account-statment-select-option-name">
                        <span> Select options for the statement period</span>
                    </div>
                    <div className="account-statment-select-option">
                        <input type="checkbox" name="byDate" id="account-statment-select-options"/>By Date
                        <input type="checkbox" name="byDate" id="account-statment-select-options"/>By Month
                        <input type="checkbox" name="byDate" id="account-statment-select-options"/>Last 6 months
                    </div>
                    <div className="account-statement-option-body">
                        <div className="account-statement-bydate">
                        <label className="startdate">Start Date</label>
                            <input type="date" name="startdate"/> 
                            <label className="startdate">End Date</label>
                            <input type="date" name="enddate"/> 
                        </div>
                    </div>
                    <div className="account-statment-select-option-name">
                        <span> Select appropriate options to view,print or download the statement</span>
                    </div>
                    <div className="account-statment-select-option">
                        <input type="checkbox" name="byDate" id="account-statment-select-options"/>view
                        <input type="checkbox" name="byDate" id="account-statment-select-options"/>Download in MS Excel Format
                        <input type="checkbox" name="byDate" id="account-statment-select-options"/>Download in PDF Format
                    </div>
                    <div className="account-statement-submit-cancel-button">
                        <button className="account-statement-submit-button">Go</button>
                        <button className="account-statement-cancel-button">Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountStatement
