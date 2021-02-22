import React from 'react';
import CoolButton from '../coolbutton/coolButton.js'

function Navbar(props) {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
         <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, and modern CSS framework based on Flexbox" width="112" height="28"/>          </a>
      
          <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
         </div>
         <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
            <a className="navbar-item">
                Home
            </a>
          <div className="navbar-end">
            <div className="navbar-item">
                <div className="field is-grouped">
                 <p className="control">
                    <div>
                        <CoolButton label="login" isSmall isDanger className="is-rounded my-class">Button 1</CoolButton>
                        <CoolButton label="signup"isSmall isSuccess>Button 2</CoolButton>
                    </div>
                 </p>
                </div>
            </div>
          </div>
         </div>
         </div>
        </nav>
)
}

export default Navbar