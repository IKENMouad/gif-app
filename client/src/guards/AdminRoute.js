import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../helpers/auth.helper';



export default function AdminRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuthenticated() && isAuthenticated().roles.includes("admin")) {
          return (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }
        return <Component {...props} />;
      }}
    />
  );
}

 