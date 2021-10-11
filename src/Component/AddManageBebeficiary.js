import React, { Component } from 'react'
import  './AddManageBeneficiary.css';
import UserService from '../Services/UserService'

 class AddManageBebeficiary extends Component {
    constructor(props){
        super(props);
        this.state={
            beneficiaryname:"",
            accountnumber:"",
            reaccountnumber:"",
            ifsccode:"",
            beneficiaryemail:"",
            accounttype:""

        }
        this.submitHandler=this.submitHandler.bind(this);
        //this.register=this.register.bind(this);
      }
    submitHandler = (e) => {
        e.preventDefault();
        let beneficiaryInfo = { beneficiaryname: this.state.beneficiaryname, accountnumber: this.state.accountnumber,
            reaccountnumber: this.state.reaccountnumber,ifsccode: this.state.ifsccode,beneficiaryemail:this.state.beneficiaryemail,
            accounttype: this.state.accounttype}
            UserService.saveBeneficiaryInfo(beneficiaryInfo)
    }
    render() {
        return (
            <div className="accountSummaryDetails">
                <div className="accountDetail">
                    <p> Add Manage Beneficiary</p>
                </div>
                <form onSubmit={this.submitHandler}>
                    <div className="add-manage-beneficiary">
                        <div className="beneficiarytype">
                            <label>Beneficiary Type Transfer to other Bank/Credit card payment/(NEFT/RTGS/IMPS)</label>

                        </div>
                        <div className="beneficiaryname">
                            <label>Beneficiary Name*</label>
                            <input type="beneficiaryname" name="beneficiaryname" placeholder="Beneficiaryname.." onChange={(e) => this.setState({beneficiaryname:e.target.value})}  />
                        </div>
                        <div className="beneficiary-account-number">
                            <label>Beneficiary Account Number*</label>
                            <input type="accountnumber" name="accountnumber" placeholder="Accountnumber.." onChange={(e) => this.setState({accountnumber:e.target.value})}/>
                        </div>
                        <div className="re-beneficiary-account-number">
                            <label>Re-Enter Beneficiary Account Number*</label>
                            <input type="reaccountnumber" name="accountnumber" placeholder="Accountnumber.." onChange={(e) => this.setState({reaccountnumber:e.target.value})} />
                        </div>
                        <div className="IFSC-Code">
                            <label>IFSC Code*</label>
                            <input type="ifsccode" name="ifsccode" placeholder="Ifsccode.." onChange={(e) => this.setState({ifsccode:e.target.value})}/>
                        </div>
                        <div className="beneficiary-email">
                            <label>Email</label>
                            <input type="beneficiaryemail" name="accountnumber" placeholder="Beneficiaryemail.." onChange={(e) => this.setState({beneficiaryemail:e.target.value})}/>
                        </div>
                        <div className="beneficiary-account-type">
                            <label>Account Type *</label>
                            <select className="accounttype" id="purpose" onChange={(e) => this.setState({accounttype:e.target.value})} >
                                <option value="volvo">Saving</option>
                                <option value="saab">Current</option>
                            </select>
                        </div>
                        <div className="select-account5">
                            <button className="submitTransfer">Submit</button>
                            <button className="submitTransfer">Cancel</button>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default AddManageBebeficiary
