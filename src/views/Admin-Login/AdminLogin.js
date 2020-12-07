import './AdminLogin.css';
import React, { useState } from 'react';
import Button from '../../components/Button';
import { connect } from "react-redux";
import { login } from "../../actions/session";

const mapStateToProps = ({ errors }) => ({
  errors
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

//============= LOGIN COMPONENT ===============
const AdminLogin = ({ errors, login }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const user = {
      email,
      password
    }

    login(user);
    //Resetting input fields
    setEmail('');
    setPassword('');
  }

  return (
    <div className="AdminLogin">
      <div className="admin_login_container">
        <form onSubmit={handleSubmit} >
          <p>{ errors }</p>
          <h3>Admin Login</h3>

          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            value={password}
            onChange={handlePassword} />
          <Button formButton="Sign In" />
        </form>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AdminLogin);