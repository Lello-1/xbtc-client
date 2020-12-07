import './SignUp.css';
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../../actions/session";

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: admin => dispatch(signup(admin))
});

const Signup = ({ errors, signup }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const admin = {
      firstname: e.target[0].value,
      lastname: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value
    };
    
    signup(admin);
  };

  return (
    <div className="SignUp">
      <h1 className="Signup_header">Create Admin Account</h1>
      <p>{errors}</p>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input type="text" name="firstname" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastname" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Link to="/login">Login</Link>
    </div>
    );
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Signup);