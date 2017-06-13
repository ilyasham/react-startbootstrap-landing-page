/**
 * Created by ilya on 6/13/17.
 */

import React, { Component } from 'react';

class Footer extends Component {
  render() {

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <ul className="list-inline">
                <li>
                  <a href="#">Home</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li className="footer-menu-divider">&sdot;</li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              <p className="copyright text-muted small">Copyright &copy; Your Company 2014. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default Footer
