import React from 'react';
import {useNavigate} from "react-router-dom";

const Register = () => {
  return (
    <div>
        <div className="">
	<nav className="navbar navbar-expand-md navbar-light nav-height" style={{backgroundColor: "grey"}}>
  {/* <a className="navbar-brand" href="/#">
    <img src="images/rich.png" width="150" height="90" className="img-fluid" alt="logo"/>
    KAWO LEGAL
  </a> */}
{/*   
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto kor">
      <li className="nav-item">
        <a className="nav-link" href="kawo.html">Home</a>
      </li>
            <li className="nav-item">
        <a className="nav-link" href="startup.html">Start Up</a>
      </li>
            <li className="nav-item">
        <a className="nav-link" href="register.html">Register</a>
      </li>
            <li className="nav-item">
        <a className="nav-link" href="loginpage.html">Login</a>
      </li>
    </ul>
    
  </div> */}
</nav>
	</div>
<br/>
<br/>
	<div className="container">
		<div className="row">
			<div className="col-md-12">
				<h2 className="text-center">Join KawoLegal. Sign up to get your Startup listed now</h2>
			</div>
		</div>
	</div>
	<br/>
<div className="container">
		<br/>
		<div className="row">
			<div className="col-md-2"></div>
			<div className="col-md-8">
	<form>
    <div className="form">
      <label for="formGroupExampleInput">Full Name</label>
      <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name"/>
    </div>

    <div className="form-group">
      <label for="formGroupExampleInput2">Email Address</label>
      <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Email Address"/>
      <label for="inputPassword5">Password</label>
      <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
      <small id="passwordHelpBlock" className="form-text text-muted">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </small>
      <label for="inputPassword5">Confirm Password</label>
      <input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
      <small id="passwordHelpBlock" className="form-text text-muted">
        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
      </small>
      <a href="/#" className="btn btn-primary">Sign up Here</a>
    </div>
  </form>
</div>
<div className="col-md-2">
</div>
</div>
</div>

<br/>
<br/>
<br/>
<br/>

<footer className="footer">
      <div className="container">
        <span className="textcolor"><small>&#169 2021 Kawo Legal All Rights Reserved</small></span>
        <a href="htpps://privacypolicy"><small>Privacy Policy</small></a>
  <a href="htpps://Terms of Service"><small>Terms of Service</small></a>
  <span className="float-right">
  <a href="/#"><i className="fab fa-facebook-f text-info"></i></a>
  <a href="/#"><i className="fab fa-instagram text-info"></i></a>
  <a href="/#"><i className="fab fa-linkedin text text-info"></i></a>
  <a href="/#"><i className="fab fa-twitter text-info"></i></a>
</span>
      </div>
 </footer>
    </div>
   
  )
}

export default Register;