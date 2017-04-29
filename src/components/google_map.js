import React from 'react';

class GoogleMap extends React.Component {

  componentDidMount(){
    // this is how we make an embedded google map in a component
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }

  render(){
    return <div ref="map" />;
  }
// labeling the 'ref' gives us direct access to the html element that contains
  // the map
}

export default GoogleMap;
