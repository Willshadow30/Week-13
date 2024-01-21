import React from 'react';

const LoginForm = () =>{
    return(
        <div className="login-form">
        <h3 className="login-title">Log In</h3>
        <div className="form-group">
            <label htmlFor="username">Username:</label> {/* labels self explain */}
            <input type="text" id="username" />
            </div>  {/* div bascially break webpage up into sections */}
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            </div>    
        </div>
    );
};

export default LoginForm;