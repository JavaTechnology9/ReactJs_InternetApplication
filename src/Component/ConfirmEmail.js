import React, { Component } from 'react'
import UserService from '../Services/UserService'

export class ConfirmEmail extends Component {
    // componentWillMount = () => {
    //     const id = this.props.location.search
    //     const name = this.props.match.param
    //     console.log("ConfirmEmail is called"+ id)
    //     console.log("ConfirmEmail is called"+ name)
    // }
    componentDidMount = () => {
        const id = this.props.location.search
        UserService.validateTiken(id).then(res=>{
            if(res.status===200){
                alert(res.data);
              this.props.history.push("/")
            }else if(res.status===201){
                alert(res.data);
            }
        }).catch(err=>{
            alert(err)
        });
    }
    render() {
        return (
            <div>
                <p>testing</p>
            </div>
        )
    }
}

export default ConfirmEmail
