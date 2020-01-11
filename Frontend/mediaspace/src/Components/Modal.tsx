import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {auth} from "../actions";
import $ from "jquery";
import { Redirect } from "react-router-dom";

interface IUser {
    username: string;
    password: string;
}

const Modal: React.FC = (props: any) => {
    const [formDetails, setFormDetails] = useState<IUser>({username: "", password: ""});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {name, value} = e.target;
        setFormDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
        //setShowModal(prevState => !prevState);
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        props.login(formDetails);
    };

    return (
        <div className="modal fade" id="LoginModal" tabIndex={-1} role="dialog" aria-labelledby="LoginModal"
             aria-hidden="true">
            <button type="button" className="close float-close-pro" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                <div className="modal-content">
                    <div className="modal-header-pro">
                        <h2>Welcome Back</h2>
                        <h6>Sign in to your account to continue using MediaSpace</h6>
                    </div>
                    <div className="modal-body-pro social-login-modal-body-pro">

                        <div className="registration-social-login-container">
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <input type="text" name="username"
                                           value={formDetails.username}
                                           className="form-control"
                                           id="username" placeholder="Username" onChange={handleChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" name="password"
                                           value={formDetails.password}
                                           className="form-control"
                                           id="password"
                                           placeholder="Password" onChange={handleChange}/>
                                </div>
                                <div className="errorForm" style={{display: "none"}}>
                                    Error with signing in.
                                </div>
                                <div className="form-group">
                                    <button type="submit"
                                            className="btn btn-green-pro btn-display-block"
                                    >Sign In
                                    </button>
                                </div>
                                <div className="container-fluid">
                                    <div className="row no-gutters">
                                        <div className="col checkbox-remember-pro"><input type="checkbox"
                                                                                          id="checkbox-remember"/><label
                                            htmlFor="checkbox-remember" className="col-form-label">Remember me</label>
                                        </div>
                                        <div className="col forgot-your-password"><a href="#!">Forgot your password?</a>
                                        </div>
                                    </div>
                                </div>

                            </form>

                            <div className="registration-social-login-or">or</div>

                        </div>

                        <div className="registration-social-login-options">
                            <h6>Sign in with your social account</h6>
                            <div className="social-icon-login facebook-color"><i
                                className="fab fa-facebook-f"></i> Facebook
                            </div>
                            <div className="social-icon-login twitter-color"><i className="fab fa-twitter"></i> Twitter
                            </div>
                            <div className="social-icon-login google-color"><i
                                className="fab fa-google-plus-g"></i> Google
                            </div>
                        </div>

                        <div className="clearfix"></div>

                    </div>

                    <a className="not-a-member-pro" href="signup-step2.html">Not a member? <span>Join Today!</span></a>
                </div>
            </div>
        </div>
                    )

}

const mapStateToProps = (state:any) => {
    let errors = [] as any;
    if (state.auth.errors) {
        errors = Object.keys(state.auth.errors).map(field => {
            return {field, message: state.auth.errors[field]};
        });
    }
    return {
        errors,
        isAuthenticated: state.auth.isAuthenticated
    };
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        login: (formDetails: any) => {
            return dispatch(auth.login(formDetails));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);