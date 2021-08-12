import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import UserList from "./pages/auth/admin/UserList";
import Auth from "./pages/auth/Auth";
import Gifs from "./pages/gif/Gifs";
import UserItem from "./pages/UserItem";
import AuthRoute from "./guards/AuthRoute";
import AdminRoute from "./guards/AdminRoute";
import SticherList from "./pages/sticher/StickerList";
import { Fragment } from "react";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/auth" component={Auth} />
          <Route exact path="/" component={Home} />
          <AuthRoute exact path="/gifs" component={Gifs} />
          <AuthRoute exact path="/stichers" component={SticherList} />
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
    </Fragment>
  );
};

export default App;
