import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({component: Component, ...props}) => {
    return(
        <Route render={() => (props.loggedInStatus ? (<Component {...props} />) : (<Redirect to="/login" />))} />
    )
}

export default PrivateRoute;