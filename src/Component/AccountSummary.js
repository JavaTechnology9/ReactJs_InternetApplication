import React, { Component } from 'react'
import Cookie from "js-cookie";
import UserService from '../Services/UserService'

 class AccountSummary extends Component {
     constructor(props){
         super(props);
         this.state={
           accountinfo: Cookie.getJSON("accountInfo"),
           userinfo: Cookie.getJSON("userinfo"),
           
              
         }
     }
    render() {
        if(this.state.userinfo===undefined){
            UserService.loaduserinfo("userinfo").then(res=>{
                console.log("userInfo"+res.data)
                this.setState({userinfo:res.data})
            })
        }
        if(this.state.accountinfo===undefined){
            UserService.loaduserinfo("accountInfo").then(res=>{
                console.log("accountinfo"+res.data)
                this.setState({accountinfo:res.data})
            })
        }
        return (
            <div className="accountSummaryDetails">
                <div className="accountDetail">
                    <p> Account Details</p>
                </div>
                <div className="userSummary">
                    <table id="accountSummary">
                        <tr>
                            <td> Account Number</td>
                            <td>{this.state.accountinfo.accountNumber}</td>
                            {/* <td> Account Number</td> */}
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>{this.state.accountinfo.sortname}</td>
                            {/* <td>Name</td> */}
                        </tr>
                        <tr>
                            <td>Available Balance</td>
                            <td>{this.state.accountinfo.accountBalance===null?'0.00':this.state.accountinfo.accountBalance}</td>
                        </tr>
                        <tr>
                            <td>Monthly Avarage Balance</td>
                            <td>{this.state.accountinfo.monthlyBalance}</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td>INR</td>
                        </tr>
                    </table>
                </div>
                <div className="accountDetail">
                    <p> Last 10 Transaction</p>
                </div>
                <div className="userSummary">
                    <table id="customers">
                        <tr>
                            <th> Date</th>
                            <th> Narration </th>
                            <th> Ref/Cheque No </th>
                            <th> Debit</th>
                            <th> Credit </th>
                            <th> Balance</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                        </tr>
                        <tr>
                            <td>Available Balance</td>
                            <td>Roland Mendel</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                        </tr>
                        <tr>
                            <td>Monthly Avarage Balance</td>
                            <td>Yoshi Tannamuri</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td>Giovanni Rovelli</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td>Giovanni Rovelli</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td>Giovanni Rovelli</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                        </tr>
                        <tr>
                            <td>Currency</td>
                            <td>Giovanni Rovelli</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                            <td>Name</td>
                            <td>Francisco Chang</td>
                        </tr>
                    </table>
                </div>
             
            </div>
        )
    }
}

export default AccountSummary
