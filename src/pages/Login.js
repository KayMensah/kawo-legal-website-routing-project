import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center">
              Already a Member? Login to add your Startup
            </h2>
          </div>
        </div>
      </div>

      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput2">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email Address"
                />
                <label for="inputPassword5">Password</label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                />
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Your password must be 8-20 characters long, contain letters
                  and numbers, and must not contain spaces, special characters,
                  or emoji.
                </small>
                <br />
                <a href="#" className="btn btn-primary">
                  Sign up Here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <span className="textcolor">
            <small>&#169 2021 Kawo Legal All Rights Reserved</small>
          </span>
          <a href="htpps://privacypolicy">
            <small>Privacy Policy</small>
          </a>
          <a href="htpps://Terms of Service">
            <small>Terms of Service</small>
          </a>
          <span className="float-right">
            <a href="/#">
              <i className="fab fa-facebook-f text-info"></i>
            </a>
            <a href="/#">
              <i className="fab fa-instagram text-info"></i>
            </a>
            <a href="/#">
              <i className="fab fa-linkedin text text-info"></i>
            </a>
            <a href="/#">
              <i className="fab fa-twitter text-info"></i>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Login;
