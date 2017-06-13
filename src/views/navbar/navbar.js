/**
 * Created by ilya on 6/13/17.
 */
/**
 * Created by ilya on 6/13/17.
 */
import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
        <div className="container topnav">
          {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a className="navbar-brand topnav" href="#">Start Bootstrap</a>
          </div>
          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container -->*/}
      </div>
    )
  }
}

export default NavBar
