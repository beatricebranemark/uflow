import React, { Component } from 'react';
import logo from '../images/logo.jpg';
import { modelInstance } from '../data/model';

class Welcome extends Component {

    render() {

      return (
        <div className="Welcome">
          {/*<NavBar/>*/}
          <div className="col-md-2">
          </div>
          <div className="col-md-8 jumbotron">
            <div id="welcome">
              <img className="img-responsive welcomeLogo" src={logo} alt="logo"/>
              <br/>

              <button id="logInButton" onClick={() => modelInstance.googleLogin()}>Log in with Google</button>

              {/*<p id="or">OR</p>
              <Link to="/explore">
                  <button className="actionButton">Log in</button>
              </Link>*/}
            </div>
          </div>
        </div>
      );
    }
}

export default Welcome;
