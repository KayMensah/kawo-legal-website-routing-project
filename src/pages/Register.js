import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  return (
    <div className="main-section">
   
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-left">
              Join KawoLegal. Sign up to get your Startup listed now
            </h2>
          </div>
        </div>
      </div>
      <br />
      <div className="container">
        <br />
        <div className="row">
          <div className="col-md-8 offset">
            <form>
              <div className="form-group">
                <label for="formGroupExampleInput">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Full Name"
                />
              </div>

              <div className="form-group mt-2">
                <label for="formGroupExampleInput2">Email Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput2"
                  placeholder="Email Address"
                />
              </div>

              <div className="form-group mt-2">
                <label for="inputPassword5">Password</label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                />
                <p id="passwordHelpBlock" className="form-text text-muted">
                  <small>
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </small>
                </p>
              </div>

              <div className="form-group mt-2">
                <label for="inputPassword5">Confirm Password</label>
                <input
                  type="password"
                  id="inputPassword5"
                  className="form-control"
                  aria-describedby="passwordHelpBlock"
                />

                <p id="passwordHelpBlock" className="form-text text-muted">
                  <small>
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </small>
                </p>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Sign up Here
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
