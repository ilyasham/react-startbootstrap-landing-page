/**
 * Created by ilya on 6/13/17.
 */
/**
 * Created by ilya on 6/13/17.
 */

import React, { Component } from 'react';

class ContentB extends Component {
  render() {

    return (
      <div className="content-section-b">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
              <hr className="section-heading-spacer"/>
                <div className="clearfix"></div>
                <h2 className="section-heading">3D Device Mockups<br/>by PSDCovers</h2>
                <p className="lead">
                  Turn your 2D designs into high quality, 3D product shots in seconds using free Photoshop actions by
                  <a target="_blank" href="http://www.psdcovers.com/" rel="noopener noreferrer">
                    PSDCovers
                  </a>
                  ! Visit their website to download some of their awesome, free photoshop actions!</p>
            </div>
            <div className="col-lg-5 col-sm-pull-6  col-sm-6">
              <img className="img-responsive" src="img/dog.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default ContentB
