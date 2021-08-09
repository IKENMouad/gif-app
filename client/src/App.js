import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import { AdminRoute } from "./guards/PrivateRoute";
import UserList from "./pages/auth/admin/UserList";
import Auth from "./pages/auth/Auth";
import UserItem from "./pages/UserItem";

const App = () => {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/auth" component={Auth} />
        <AdminRoute exact path="/admin/users" component={UserList} />
        <Route exact path="/users/:userId" component={UserItem} />
        <AdminRoute exact path="/admin/users/create" component={UserList} />
        <AdminRoute exact path="/admin/categories" component={UserList} />
        <AdminRoute
          exact
          path="/admin/categories/create"
          component={UserList}
        />
        <AdminRoute exact path="/admin/roles/" component={UserList} />
        <AdminRoute exact path="/admin/roles/create" component={UserList} />
      </Switch>
    </Router>
  );
};

export default App;
