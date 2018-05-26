import React, { Component } from 'react';


const Weather = props => (
    <div>
        Weather Details!
    <br />
        {props.city && props.country && <p> Location:{props.city},{props.country}</p>}
        {props.temprature && <p> Temperature :{props.temperature}<br /></p>}
        {props.humidity && <p>Humidity:{props.humidity}<br /></p>}
        {props.description && <p>Description:{props.description}</p>}
        {props.error && <p>{props.error}</p>}

    </div>
);
export default Weather; 