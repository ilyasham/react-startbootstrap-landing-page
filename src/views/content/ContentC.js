/**
 * Created by ilya on 6/13/17.
 */

import React, { Component } from 'react';

class ContentC extends Component {
  render() {

    return (
      <div className="content-section-a">

        <div className="container">

          <div className="row">
            <div className="col-lg-5 col-sm-6">
              <hr className="section-heading-spacer"/>
                <div className="clearfix"></div>
                <h2 className="section-heading">Google Web Fonts and<br/>Font Awesome Icons</h2>
                <p className="lead">This template features the 'Lato' font, part of the
                  <a target="_blank" href="http://www.google.com/fonts" rel="noopener noreferrer">Google Web Font library</a>
                  , as well as
                  <a target="_blank" href="http://fontawesome.io" rel="noopener noreferrer">icons from Font Awesome</a>.</p>
            </div>
            <div className="col-lg-5 col-lg-offset-2 col-sm-6">
              <img className="img-responsive" src="img/phones.png" alt=""/>
            </div>
          </div>

        </div>

      </div>
    )

  }
}

export default ContentC
