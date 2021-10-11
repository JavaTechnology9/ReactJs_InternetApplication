import React, { Component } from 'react'
import Cookie from "js-cookie";

 class UserProfile extends Component {

    constructor(props){
        super(props);
        this.state={
            oldPassword:"",
            newPassword:"",
            retrynewPassword:"",
            userinfo: Cookie.getJSON("userinfo"),
            errors:{}
        }
       
    }    render() {
            return (
                <div className="accountSummaryDetails">
                <div className="accountDetail">
                    <p> User Details</p>
                </div>
                <div className="userSummary">
                    <table id="accountSummary">
                        <tr>
                            <td> User Name</td>
                            <td>{this.state.userinfo.person.firstname +' '+ this.state.userinfo.person.lastname}</td>
                            {/* <td> Account Number</td> */}
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>{this.state.userinfo.person.contact.email}</td>
                            {/* <td>Name</td> */}
                        </tr>
                        <tr>
                            <td>Mobile Number</td>
                            <td>{this.state.userinfo.person.contact.mobilenumber}</td>
                        </tr>
                        <tr>
                            <td>User Name</td>
                            <td>{this.state.userinfo.username}</td>
                        </tr>
                        <tr>
                            <td>Address </td>
                            <td>{this.state.userinfo.person.address.address1+' '+ this.state.userinfo.person.address.address2+' '+this.state.userinfo.person.address.address3}</td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>{this.state.userinfo.person.address.city}</td>
                        </tr>
                        <tr>
                            <td>State </td>
                            <td>{this.state.userinfo.person.address.state}</td>
                        </tr>
                        <tr>
                            <td>Pincode </td>
                            <td>{this.state.userinfo.person.address.zipcode}</td>
                        </tr>
                    </table>
                </div>
                </div>
            )
    }
}

export default UserProfile
