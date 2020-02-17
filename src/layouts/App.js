import React, { Component } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";

class App extends Component {
  state = {
    loggedInStatus: true,
    userLogin: {
      email: "lukasz.karbowniczek@gmail.com",
      password: "qwerty",
      adminRole: true
    }
  };

  handlerUserLogin = (e, loginUserName, loginUserPass) => {
    e.preventDefault();
    if (
      loginUserName === this.state.userLogin.email &&
      loginUserPass === this.state.userLogin.password
    ) {
      this.setState({
        loggedInStatus: true
      });
    } else {
    }
  };

  handlerUserLogout = () => {
    this.setState({
      loggedInStatus: false
    });
  };

  handlerSubmitSignIn = e => {
    e.preventDefault();
  };

  render() {
    const { loggedInStatus } = this.state;
    const { userLogin } = this.state;
    return (
      <Router>
        <div className="app">
          <main>
            {
              <Header
                loggedInStatus={loggedInStatus}
                user={userLogin}
                handlerUserLogout={this.handlerUserLogout}
              />
            }
            <section className="page">
              {
                <Page
                  handlerUserLogin={this.handlerUserLogin}
                  user={userLogin}
                  handlerSubmitSignIn={this.handlerSubmitSignIn}
                  loggedInStatus={loggedInStatus}
                />
              }
            </section>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
