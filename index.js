import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './components/Map';
import './style.css';




function App(){
  return (<Map zoom={4} center={{lat:53.80,lng: 12.63}} locations={locations} />);
}

render(<App/>, document.getElementById('root'));
