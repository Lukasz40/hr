import React, { Component } from "react";
import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Header from "./Header";
import Page from "./Page";

const customHistory = createBrowserHistory();

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

  handleUserDialog = rowData => {
    const userDetails = {
      firstName: rowData.firstName,
      lastName: rowData.lastName,
      email: rowData.email,
      devLangs: [
        { devLang: "HTML", devExperience: ">10", devLastUse: "2020" },
        { devLang: "HTML5", devExperience: "6", devLastUse: "2020" },
        { devLang: "CSS", devExperience: ">10", devLastUse: "2020" },
        { devLang: "CSS3", devExperience: ">10", devLastUse: "2020" },
        { devLang: "Less", devExperience: "6", devLastUse: "2020" },
        { devLang: "Sass", devExperience: "6", devLastUse: "2020" },
        { devLang: "JavaScript", devExperience: "4", devLastUse: "2020" },
        { devLang: "jQuery", devExperience: "4", devLastUse: "2020" },
        { devLang: "ReactJS", devExperience: "<0,5", devLastUse: "2020" },
        { devLang: "Bootstrap", devExperience: "6", devLastUse: "2020" },
        { devLang: "SQL", devExperience: "2", devLastUse: "2018" },
        { devLang: "Velocity", devExperience: "2", devLastUse: "2015" }
      ],
      tools: [
        { tool: "FTL", toolExperience: "3", toolLastUse: "2014" },
        { tool: "GIT", toolExperience: "5", toolLastUse: "2020" },
        { tool: "SVN", toolExperience: ">10", toolLastUse: "2020" },
        { tool: "RWD", toolExperience: ">10", toolLastUse: "2020" },
        { tool: "Eclipse", toolExperience: "10", toolLastUse: "2019" }
      ],
      database: [
        {
          databaseName: "mySQL",
          databaseExperience: "3",
          databaseLastUse: "2017"
        }
      ],
      others: [
        {
          otherName: "Wordpress",
          otherExperience: "5",
          otherLastUse: "2019"
        },
        { otherName: "Liferay", otherExperience: "5", otherLastUse: "2017" },
        {
          otherName: "Windows",
          otherExperience: ">10",
          otherLastUse: "2020"
        },
        { otherName: "Eclipse", otherExperience: ">10", otherLastUse: "2019" }
      ],
      education: [
        {
          school: "Państwowa Wyższa Szkoła Zawodowa w Tarnobrzegu",
          years: "2005-2007"
        }
      ],
      languages: [{ languageName: "Angielski", languageLevel: "podstawowy" }],
      projects: [
        {
          projectName: "DPD",
          projectDescription: "HTML,CSS,JavaScript,jQuery",
          projectTechnologies: "Wygląd i zachowanie serwisu po stronie klienta"
        },
        {
          projectName: "Projekt wewnętrzny na potrzeby nauki React",
          projectDescription: "ReactJs",
          projectTechnologies:
            "Projekt umożliwiający wypełnienie CV za pomocą formularza oraz edycja na użytek działu hr"
        }
      ],
      certificates: [
        { certificateName: "JavaScript od podstaw", certificateYear: "2019" },
        { certificateName: "React od podstaw", certificateYear: "2020" }
      ]
    };
    this.setState(prevState => ({
      ...prevState,
      userDetails: userDetails
    }));
  };

  render() {
    const { userLogin, userDetails, loggedInStatus } = this.state;
    return (
      <Router history={customHistory}>
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
                  userDetails={userDetails}
                  handleUserDialog={this.handleUserDialog}
                  handlerSubmitSignIn={this.handlerSubmitSignIn}
                  loggedInStatus={loggedInStatus}
                  clickedRow={this.clickedRow}
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
