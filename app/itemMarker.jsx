import React from 'react';
import { Marker } from 'react-leaflet';

const itemMarker = ({item}) => (
  <Marker position={item.owner.location} />
);

module.exports = itemMarker;
