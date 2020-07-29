import React, { useRef, useState, useEffect } from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import Pin from './Pin.js';
import Pins from './Pins.js';
import L from 'leaflet';
import icons from './icons';

    function PointsList(props) {
    const { data, onItemClick, selectedIndex } = props;
    return (
        <div>
        <ul className="data-list">
            {data.map((item) => (
            <li
                key={item.id}
                onClick={e => {
                onItemClick(item.id);
                }}
                className = {selectedIndex == item.id ? 'selected' : '' }
            >
                {item.name}
            </li>
            ))}
        </ul>
        </div>
    );
    }




function MapExample(props) {
  const [selected, setSelected] = useState();
  const { zoom, bounds, locations, maxZoom } = props;

  function handleItemClick(index) {
        setSelected(index);
  }

  return (
    <div>
      <PointsList data={locations} onItemClick={handleItemClick} selectedIndex={selected} />
      <Map bounds={bounds} zoom={zoom} zoom={6} maxZoom={maxZoom}>
      <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
        <Pins selectedIndex={selected} data={locations} onItemClick={handleItemClick}  />
      </Map>
    </div>
  );
}

export default MapExample;