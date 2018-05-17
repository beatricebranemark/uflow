import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.jpg';
import { modelInstance } from '../data/model';
import NavBar from "../Navbar/Navbar";
import firebase from 'firebase';


class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = ({
      currentUser: null
    })
  }

  componentDidMount() {
    modelInstance.createApp()
    firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref('/users/' + user.uid).once('value', snapshot => {
        this.setState({currentUser: snapshot.val()})
      })
    })
  }

  setCurrentUserInModel() {
    modelInstance.currentUser = this.state.currentUser.id;
  }

    render() {
      //console.log(this.state.currentUser);
      var currentUser = this.state.currentUser;

      if (currentUser !== null) {

        var profile_pic = currentUser.profile_pic;
        var username = currentUser.email;
        username = username.substring(0,username.indexOf("@"));
        username = username.replace(/[^a-z0-9]+|\s+/gmi, "");
        var ID = currentUser.id;
      }


      return (
          <div className="Signup container">
            {/*<NavBar />*/}
            <div className="col-md-2">
            </div>
            <div className="col-md-8 jumbotron" id="signup">
              <img className="img-responsive welcomeLogo" src={logo} alt="logo"/>
              <h2>Welcome @{username}!</h2>
              <div id="welcomePhoto">
                <img id="profilePicture" src={profile_pic} alt="profilePicture" />
              </div>
              <br></br>
                <div id="uploadImage">
                 <input type="file" id="file" name="file" onChange={modelInstance.handleFileSelect}></input>
               </div>

              <Link to="/explore">
                <button className="actionButton" type="submit" value="Continue">Continue</button>
              </Link>
            </div>
          </div>
      );
    }
}

export default Signup;
