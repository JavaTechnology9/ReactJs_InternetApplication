import React, { Component } from 'react'
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom';
import '../App.css';
import '../Title.css';
// import SBI from './SBIlogo.png'
// import SBIOnline from './SBIOnline.jpg'
//import JavaTech from './JavaTech.png'
//import JavaTech from './JAVA_BANK_3.png'
import SigninComponent from './SigninComponent';
import RegisterComponent from './RegisterComponent';
import HomeSComponent from './HomeComponent';

 class HomeHeader extends Component {
    render() {
        return (
            <BrowserRouter>
                    {/* <div className="Title">
                        <Link to="/"><img className="SBI" src={JavaTech} alt="Logo" /></Link>
                        <Link to="/"><img className="SBIOnline" src={JavaTech} alt="Logo" /></Link>
                    </div> */}
                <div className="grid-container">
                        <header className="header">
                            <div className="header-links">
                                {/* <Link to="/"><img className="SBI" src={JavaTech} alt="Logo" /></Link> */}
                                <Link to="/" className="logo_header">JAVA BANK</Link>
                                <Link to="/signin">Services</Link>
                                <Link to="/signin">MobileBanking</Link>
                                <Link to="/signin">FAQ</Link>
                                <Link to="/signin">Corporate Website</Link>
                                <Link to="/signin">SBCollect</Link>
                                <Link to="/signin">Billpay</Link>
                                <Link to="/signin">SBI Loans</Link>
                                <Link to="/signin">Apply for SB/Current Account</Link>                       
                            </div>
                        </header>
                            
                    <main className="main">
                    <div className="content">
                        <Route path="/signin" component={SigninComponent} />
                        <Route path="/register" component={RegisterComponent} />
                        <Route path="/home" component={HomeSComponent} />
                        <Route path="/" exact={true} component={HomeSComponent} />
                        
                    </div>
                    </main>
                    <footer className="footer">All right reserved.</footer>
                </div>
            </BrowserRouter>
        )
    }
}

export default HomeHeader
