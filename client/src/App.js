import React from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './component/Navbar'
import AuthRoute from './guards/AuthRoute';
import Auth from './pages/auth/Auth';
const Loading = React.lazy(() => import('./shared/Loading'))
const CategoryList = React.lazy(() => import('./pages/category/CategoryList'))



const App = () => {
    return (
        <React.Suspense fallback={Loading} >
            <Router>
                <Navbar></Navbar> 
                <Switch>
                    <Route exact path="/auth" component={Auth} ></Route>
                    <AuthRoute exact path="/categories" component={CategoryList}   ></AuthRoute>
                </Switch> 
            </Router>

        </React.Suspense>
    )
}

export default App