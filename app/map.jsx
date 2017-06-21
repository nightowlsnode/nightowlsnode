import React from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer } from 'react-leaflet';
const position = [40.7128, -74.0059];

class MapView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Map
          style={{ height: '500px' }}
          center={position}
          zoom={10}
        >
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiamx1c3RoYXVzIiwiYSI6ImNqNDYybDh4YTBiMzczMmx0dXhyczBlN3YifQ.v4kXx9my0zpHNu2Xzgo0Tg"
            attribution="<attribution>"
          />
        </Map>
      </div>
    );
  }
}
module.exports = MapView;
