import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './components/Map';
import markerData from "./components/getData";
import './style.css';


const bounds = L.latLngBounds()
  markerData.forEach((data) => {
    bounds.extend(data.position)
  })

function App(){
  return (<Map zoom={4} bounds={bounds} maxZoom={10} locations={markerData} />);
}

render(<App/>, document.getElementById('root'));
