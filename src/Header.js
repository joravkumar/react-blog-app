import { Link } from "react-router-dom";

function Header() {
  return <div>
    <div>
      <div className="container">
        <div className="header">
          <div className="header-nav">
            <nav className="navbar navbar-default">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html"><span>Q</span>uickly</a>
              </div>

              <div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                  <li className="hvr-bounce-to-bottom active"><Link to="/">Home</Link></li>
                  <li className="hvr-bounce-to-bottom"> <Link to="/About">About</Link></li>
                  <li className="hvr-bounce-to-bottom"> <Link to="/Portfolio">Portfolio</Link></li>
                  <li className="hvr-bounce-to-bottom"><Link to="/Contact">Contact</Link></li>
                </ul>
                <div className="sign-in">
                  <ul>
                    <li><a href="login.html">Sign In </a>/</li>
                    <li><a href="register.html">Register</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>

      </div>
    </div>
  </div>


};

export default Header;

