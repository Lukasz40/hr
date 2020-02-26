import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "../pages/HomePage";
import UserForm from "../pages/UserForm";
import UsersList from "../pages/UsersList";
import ErrorPage from "../pages/ErrorPage";
import LoginPage from "../pages/LoginPage";
import SignIn from "../pages/SignInPage";

import PrivateRoute from "../components/PrivateRoute";

const Page = props => {
  const {
    handlerUserLogin,
    loggedInStatus,
    handlerSubmitSignIn,
    userLogin,
    clickedRow,
    userDetails,
    handleUserDialog
  } = props;
  return (
    <>
      <Switch>
        <PrivateRoute
          path="/"
          exact
          loggedInStatus={loggedInStatus}
          component={() => (
            <HomePage
              handlerUserLogin={handlerUserLogin}
              userLogin={userLogin}
            />
          )}
        />
        <PrivateRoute
          path="/form"
          component={() => <UserForm userLogin={userLogin} />}
          loggedInStatus={loggedInStatus}
        />
        <PrivateRoute
          path="/users"
          component={UsersList}
          userDetails={userDetails}
          loggedInStatus={loggedInStatus}
          clickedRow={clickedRow}
          handleUserDialog={handleUserDialog}
        />
        <Route
          path="/login"
          component={() => <LoginPage handlerUserLogin={handlerUserLogin} />}
        />
        <Route
          path="/rejestracja"
          component={() => <SignIn handlerSubmitSignIn={handlerSubmitSignIn} />}
        />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
