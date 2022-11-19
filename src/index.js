import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Card from "./Cards";
import reportWebVitals from './reportWebVitals';
ReactDOM.render(

  <>
 <h1 className="heading_style">List of six Nextflix webseries in 2020</h1>
  <Card imgsrc="wp5913975.jpg"
    title="A Netflix original series"
    Sname='Dark'
  />
  <Card imgsrc="wp5852734.jpg"
    title="A Netflix original series"
    Sname='Dark'
  />
  <Card imgsrc="wp6889077.jpg"
    title="A Netflix original series"
    Sname='Dark'
  />
  <Card imgsrc="wp5770334 (1).jpg"
    title="A Netflix original series"
    Sname='Dark'
  />
  <Card imgsrc="wp5913975.jpg"
    title="A Netflix original series"
    Sname='Dark'
  />
  <Card imgsrc="Netflix.webp"
    title="A Netflix original series"
    Sname='Dark'
  />
  </>,
  document.getElementById("root")
);