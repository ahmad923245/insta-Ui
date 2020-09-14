import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="mycard">
      <div className="card auth-card">
        <h2>Rehaish</h2>
        <h3>Create Account </h3>
        <input type="text" placeholder="Enter Name" />
        <input type="text" placeholder="Enter Email" />
        <input type="text" placeholder="Enter Password" />

        <button
          className="btn waves-effect waves-light"
        
        >
          Login
        
        </button>
        <h5>
            <Link to="/signin">Already Have an Account ?</Link>
        </h5>
      </div>
    </div>
  );
};
export default SignUp;
