import React, {Component} from 'react';
import {
  Carousel,
  CarouselInner,
  CarouselItem,
  View,
  Mask
} from 'mdbreact';
import ('./Carousel.css');

class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 3
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if (nextItem > this.state.maxLength) {
      this.setState({activeItem: 1});
    } else {
      this.setState({activeItem: nextItem});
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if (prevItem < 1) {
      this.setState({activeItem: this.state.maxLength});
    } else {
      this.setState({activeItem: prevItem});
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({activeItem: item});
    }
  }

  render() {
    const {activeItem} = this.state;
    return (<Carousel activeItem={this.state.activeItem} next={this.next} className="z-depth-1">
      <CarouselInner>
        <CarouselItem itemId="1">

          <View>
            <div className="img-container" style={{
                backgroundImage: `url('../../assets/images/friedrice.jpg')`
              }}></div>

            <Mask overlay="black-light"></Mask>

            <div className="full-bg-img flex-center mask rgba-blue-slight white-text">
              <ul className="animated fadeInUp col-md-5 col-sm-10 list-unstyled list-inline">
                <li>
                  <h1 className="font-weight-bold text-uppercase headline">Welcome</h1>
                </li>
                <li>
                  <p className="font-weight-light text-uppercase py-4 about-us">
                    We are a family owned restaurant serving the Cherry Creek area since 2006, offering the classic Asian Fusion dishes you know and love, plus a few specials of our own. We pride ourselves on fresh food, great flavor, and affordable prices—and free delivery within a 3-miles radius!
                  </p>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.grubhub.com/restaurant/101-asian-fusion-101-madison-st-denver/301394" className="btn btn-unique btn-lg btn-rounded mr-0 waves-effect waves-light">
                    <i className="fa fa-cutlery prefix white-text"></i>
                    Order</a>
                </li>
              </ul>
            </div>

          </View>

        </CarouselItem>
        <CarouselItem itemId="2">
          <View>
            <div className="img-container" style={{
                backgroundImage: `url('../../assets/images/wok.jpg')`
              }}></div>
            <Mask overlay="black-light"></Mask>

            <div className="full-bg-img flex-center mask rgba-black-slight white-text">
              <ul className="col-md-5 col-sm-10 list-unstyled list-inline">
                <li>
                  <h1 className="font-weight-bold text-uppercase headline">Welcome</h1>
                </li>
                <li>
                  <p className="font-weight-light text-uppercase py-4 about-us">
                    We are a family owned restaurant serving the Cherry Creek area since 2006, offering the classic Asian Fusion dishes you know and love, plus a few specials of our own. We pride ourselves on fresh food, great flavor, and affordable prices—and free delivery within a 3-miles radius!
                  </p>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.grubhub.com/restaurant/101-asian-fusion-101-madison-st-denver/301394" className="btn btn-unique btn-lg btn-rounded mr-0 waves-effect waves-light">
                    <i className="fa fa-cutlery prefix white-text"></i>
                    Order</a>
                </li>
              </ul>
            </div>

          </View>

        </CarouselItem>
        <CarouselItem itemId="3">
          <View>
            <div className="img-container" style={{
                backgroundImage: `url('../../assets/images/aroma.jpg')`
              }}></div>
            <Mask overlay="black-light"></Mask>

            <div className="full-bg-img flex-center mask rgba-black-slight white-text">
              <ul className="col-md-5 col-sm-10 list-unstyled list-inline">
                <li>
                  <h1 className="font-weight-bold text-uppercase headline">Welcome</h1>
                </li>
                <li>
                  <p className="font-weight-light text-uppercase py-4 about-us">
                    We are a family owned restaurant serving the Cherry Creek area since 2006, offering the classic Asian Fusion dishes you know and love, plus a few specials of our own. We pride ourselves on fresh food, great flavor, and affordable prices—and free delivery within a 3-miles radius!
                  </p>
                </li>
                <li className="list-inline-item">
                  <a target="_blank" href="https://www.grubhub.com/restaurant/101-asian-fusion-101-madison-st-denver/301394" className="btn btn-unique btn-lg btn-rounded mr-0 waves-effect waves-light">
                    <i className="fa fa-cutlery prefix white-text"></i>
                    Order</a>
                </li>
              </ul>
            </div>

          </View>

        </CarouselItem>
      </CarouselInner>

    </Carousel>);
  }
}

export default CarouselPage;
