import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import { login } from '../actions/authActions';

const Login = () => {
    const history = useHistory()
    const [isSignIn, setIsSignIn] = useState(true);
    const [authRequest, setAuthRequest] = useState({
        email: '',
        password: '',
    });
    const dispatch = useDispatch();
    const swithBtn = (value) => {
        setIsSignIn(value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (isSignIn) {
            dispatch(login(authRequest));
            history.push('/')
        }
    };

    return (
        <div className="">
            <div className="row">
                <div
                    className="col-md-6 switch-btn"
                    onClick={() => swithBtn(true)}
                >
                    sign in
                </div>
                <div
                    className="col-md-6 switch-btn"
                    onClick={() => swithBtn(false)}
                >
                    sign up
                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <form onSubmit={(event) => onSubmit(event)}>
                        <div className="form-group">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                                name="email"
                                value={authRequest.email}
                                onChange={(e) =>
                                    setAuthRequest({
                                        ...authRequest,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter password"
                                name="password"
                                value={authRequest.password}
                                onChange={(e) =>
                                    setAuthRequest({
                                        ...authRequest,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                        {isSignIn ? (
                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="customCheck1"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="customCheck1"
                                    >
                                        Remember me
                                    </label>
                                </div>
                            </div>
                        ) : null}

                        <button
                            type="submit"
                            className="btn btn-primary btn-block"
                        >
                            Submit
                        </button>
                        {isSignIn ? (
                            <p className="forgot-password text-right">
                                Forgot <Link to="#">password?</Link>
                            </p>
                        ) : null}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
