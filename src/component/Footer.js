export default function FooterComponent () {

    return (
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
    )
}

