import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div style={{
    position: 'relative', color: 'white', background: 'black',
    height: 40, width: 35, top: -25, left: -25,
  }}>
    {text}
  </div>
);

class Googlemap extends Component {
  static defaultProps = {
    center: {
      lat: 39.717986,
      lng: -104.946376
    },
    zoom:16
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '60vh'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key:"AIzaSyDCF6N87SqG-MIyTWmsLjQOpEEvGGGcxbc"}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={39.717986}
            lng={-104.946376}
            text={'101 Asian Fusion'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Googlemap;
