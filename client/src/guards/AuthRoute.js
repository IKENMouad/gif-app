import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function AuthRoute({ component: Component, roles, ...rest }) {
    return (
        <Route {...rest} render={props => {
            if (!localStorage.getItem('token')) {
                return <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
            }
            return <Component {...props} />
        }} />
    );
}

export default AuthRoute