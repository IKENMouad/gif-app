import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import Auth from './pages/auth/Auth';

const App = () => {
    return (
        <Router >
            <Navbar></Navbar>
            <Switch>
                <Route exact path="/auth" component={Auth} ></Route>
            </Switch>
        </Router>
    )
}

export default App