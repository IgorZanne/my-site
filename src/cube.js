import React, { Component } from 'react';
import './cube.css';

export default class Cube extends Component {
    render() {
        return (
            <div className="scene">
                <div className="cube is-spinning">
                    <div className="cube__face cube__face--front"></div>
                    <div className="cube__face cube__face--back"></div>
                    <div className="cube__face cube__face--right"></div>
                    <div className="cube__face cube__face--left"></div>
                    <div className="cube__face cube__face--top"></div>
                    <div className="cube__face cube__face--bottom"></div>
                </div>
            </div>
        );
    }
}