import React from 'react';
import ReactDOM from 'react-dom';
import { Map, TileLayer, Popup } from 'react-leaflet';
import ItemMarker from './itemMarker.jsx';

class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 40.7128,
      long: -74.0059,
      zoom: 12,
    };
  }

  render() {
    const { searchResults } = this.props;
    const { lat, long, zoom } = this.state;
    const position = [lat, long];
    return (
      <div>
        <Map
          style={{ height: '500px' }}
          center={position}
          zoom={zoom}
        >
          <TileLayer
            url="https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiamx1c3RoYXVzIiwiYSI6ImNqNDYybDh4YTBiMzczMmx0dXhyczBlN3YifQ.v4kXx9my0zpHNu2Xzgo0Tg"
            attribution="<attribution>"
          />
          {searchResults.map(item => <ItemMarker item={item} key={item.id} handleClick={this.handlePopupClick} />)}
        </Map>
      </div>
    );
  }
}
module.exports = MapView;
