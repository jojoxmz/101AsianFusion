import React, {Component} from "react";
import {Card, CardImage} from 'mdbreact';

import "./Gallery.css";

class Gallery extends Component {

  render() {
    return (<div id="gallery-page">
      <div className="gallery-body">
        <div className="row justify-content-center">

          <div className="col-md-3 col-sm-10 gallery-images animated rotateInDownRight">
            <Card >
              <CardImage className="img-fluid" src="../../assets/images/rice.jpg" alt="fried rice"/>
            </Card>
          </div>
          <div className="col-md-3 col-sm-10 gallery-images animated rotateInDownRight">
            <Card>
              <CardImage className="img-fluid" src="../../assets/images/lettuce.jpg" alt="lettuce wraps"/>
            </Card>
          </div>
          <div className="col-md-3 col-sm-10 gallery-images animated fadeInLeft">
            <Card>
              <CardImage className="img-fluid" src="../../assets/images/brocbeef.jpg" alt="broccoli beef"/>
            </Card>
          </div>
        </div>

        <div className="row justify-content-center">

          <div className="col-md-3 col-sm-10 gallery-images animated fadeInRight">
            <Card>
              <CardImage className="img-fluid" src="../../assets/images/udon.jpg" alt="udon noodle"/>
            </Card>
          </div>
          <div className="col-md-3 col-sm-10 gallery-images animated fadeInUp">
            <Card>
              <CardImage className="img-fluid" src="../../assets/images/potstk.jpg" alt="pot stickers"/>
            </Card>
          </div>
          <div className="col-md-3 col-sm-10 gallery-images animated fadeInUp">
            <Card>
              <CardImage className="img-fluid" src="../../assets/images/thaisr.png" alt="thai spring rolls"/>
            </Card>
          </div>
        </div>

        <div className="row justify-content-center">

          <div className="col-md-3 col-sm-10 gallery-images animated slideInRight">
            <Card>
              <CardImage className="img-fluid" src="../../assets/images/lobster.jpg" alt="cantonese shrimp"/>
            </Card>
          </div>
          <div className="col-md-3 col-sm-10 gallery-images animated slideInLeft">
            <Card>
              <CardImage className="img-fluid" src="../../assets/images/sesameck.jpg" alt="sesame chicken"/>
            </Card>
          </div>
          <div className="col-md-3 col-sm-10 gallery-images animated slideInDown">
            <Card>
              <CardImage className="img-fluid" src="../../assets/images/pineapple.jpg" alt="pineapple chicken"/>
            </Card>
          </div>
        </div>
      </div>
    </div>)

  }
};

export default Gallery;
