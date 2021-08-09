import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { logout as logoutAction } from "../actions/authActions"

const Navbar = () => {
    const authState = useSelector((state) => state.auth);
    const [isLoggedIn, setIsLoggedIn] = useState(authState.isLoggedIn)
    const [email, setEmail] = useState(authState.userInfo.email)
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        setIsLoggedIn(authState.isLoggedIn)
        setEmail(authState.userInfo.email)
    }, [authState]);


    const logout = () => {
        dispatch(logoutAction())
        history.push('/auth')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className="navbar-brand" to="/">Logo</Link>
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/categories">  categories  </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                            <div className="dropdown-menu" aria-labelledby="dropdownId">
                                <Link className="dropdown-item" to="#">Action 1</Link>
                                <Link className="dropdown-item" to="#">Action 2</Link>
                            </div>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {isLoggedIn ?
                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => logout()} to="#"> {email} </Link>
                        </li>
                        :
                        <li className="nav-item">
                            <Link className="nav-link" to="/auth">Sign In</Link>
                        </li>
                    }
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
