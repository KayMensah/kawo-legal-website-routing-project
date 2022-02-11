import React from "react";
import { useNavigate } from "react-router-dom";

const StartUp = () => {

  return (
    <div>
      <div className="">
        <nav
          className="navbar navbar-expand-md navbar-light nav-height"
          style={{ backgroundColor: "grey" }}
        >
          {/* <a className="navbar-brand" href="/#">
            <img
              src="images/rich.png"
              width="150"
              height="90"
              className="img-fluid"
              alt="logo"
            />
            KAWO LEGAL
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto kor">
              <li className="nav-item">
                <a className="nav-link" href="kawo.html">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="startup.html">
                  Start Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="register.html">
                  Register
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="loginpage.html">
                  Login
                </a>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
      <div className="container">
        <br />
        <div className="row style">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <form className="form">
              <input
                className="form-control mr-sm-2 size"
                type="search"
                placeholder="Search Startup by name or industry"
                aria-label="Search"
              />

              <div className="col-md-2">
                <button className="btn btn-primary my-2 my-sm-0" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>

        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2 box1">
              <img
                src="images/thinkzoom.png"
                width="140"
                height="120"
                alt="zoom"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h3 className="card-title">Think and Zoom</h3>
                <p className="card-text">
                  Provide solution for the visually impaired, such as mind
                  control zooming.
                </p>
                <a href="/#" className="btn btn-outline-secondary">
                  See full details
                </a>
                <hr className="line" />
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

        <br />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2 box1">
              <img
                src="images/rainbow.png"
                width="140"
                height="120"
                alt="rainbow"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h3 className="card-title">Slatecube</h3>
                <p className="card-text">
                  Slatecube helps job seekers develop relevant skills, gain work
                  experience and land well paying jobs through world-className
                  up-skilling courses and virtual internships.
                </p>
                <a href="/#" className="btn btn-outline-secondary">
                  See full details
                </a>
                <hr className="line" />
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>

        <br />

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-2 box1">
              <img
                src="images/sleek.png"
                width="140"
                height="80"
                alt="rainbow"
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h3 className="card-title">Sleekjob Academy</h3>
                <p className="card-text">
                  Trains world className software developers in Ghana and
                  matches them to employment opportunities.
                </p>
                <a href="/#" className="btn btn-outline-secondary">
                  See full details
                </a>
                <hr className="line" />
              </div>
            </div>
            <div className="col-md-2"></div>
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
    </div>
  );
};

export default StartUp;
