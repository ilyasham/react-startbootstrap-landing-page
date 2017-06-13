/**
 * Created by ilya on 6/13/17.
 */

import React, { Component } from 'react';

class Header extends Component {
  render() {
    
    return (
      <div className="intro-header">
        <div className="container">

          <div className="row">
            <div className="col-lg-12">
              <div className="intro-message">
                <h1>Landing Page</h1>
                <h3>A Template by Start Bootstrap</h3>
                <hr className="intro-divider"/>
                  <ul className="list-inline intro-social-buttons">
                    <li>
                      <a href="https://twitter.com/SBootstrap" className="btn btn-default btn-lg"><i className="fa fa-twitter fa-fw"></i> <span className="network-name">Twitter</span></a>
                    </li>
                    <li>
                      <a href="https://github.com/IronSummitMedia/startbootstrap" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                    </li>
                    <li>
                      <a href="#" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                    </li>
                  </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
    
  }
}

export default Header
