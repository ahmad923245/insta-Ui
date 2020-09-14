import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
        <div className="nav-wrapper green">
          <Link to="/" className="brand-logo">Rehaish</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/signin">SignIn</Link></li>
            <li><Link to="signup">SignUp</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>
    )
}
