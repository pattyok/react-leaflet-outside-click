import React, { useRef, useEffect } from "react";
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import 'react-leaflet-markercluster/dist/styles.min.css';
import Pin from './Pin.js';


const Pins = (props) => {
    //const { pins } = props;
    const { data, selectedIndex, onItemClick } = props;
    const groupRef = useRef(null);

  
      const Markers = data.map((item) => (
        <Pin
        key={item.id}
        content={item.content}
        center={item.position}
        openPopup={selectedIndex === item.id}
        onItemClick={onItemClick}
        itemId={item.id}
        groupRef={groupRef}
        />
    ));

    return (
      <MarkerClusterGroup
        ref={groupRef}
        showCoverageOnHover={false}
        spiderfyOnMaxZoom={true}
        spiderLegPolylineOptions={{
          weight: 0,
          opacity: 0,
        }}
        removeOutsideVisibleBounds={true}
      >
        {Markers}
      </MarkerClusterGroup>
    );
  };

  export default Pins;