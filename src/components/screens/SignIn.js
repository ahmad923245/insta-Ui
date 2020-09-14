import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Rehaish</h2>
        <h3>Login To Your Account </h3>
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Enter Password" />

        <button
          className="btn waves-effect waves-light"
        
        >
          Login
        
        </button>
      </div>
      <h5>
            <Link to="/signup">Do'nt Have an Account ?</Link>
        </h5>
    </div>
  );
};
export default SignIn;
