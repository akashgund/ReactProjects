import React, { Component } from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.getWeather}>
            <input type='text' name='city' placeholder='city' />
            <input type='text' name='country' placeholder='country' />
            <input type='submit' name='submitButton' value='Get Data' />
        </form>

    </div>
);

export default Form; 