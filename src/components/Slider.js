import { Component } from "react";

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
];

class Slider extends Component {

    constructor() {
        super();
        this.state = {
            index: 0,
            on: false,
            interval: null
        }
    }

    nextImage = () => {
        if(this.state.index !== images.length - 1) {
            this.setState({
                index: this.state.index + 1,
            });
        }
    }

    prevImage = () => {
        if(this.state.index !== 0) {
            this.setState({
                index: this.state.index - 1,
            });
        }
    }

    startSlider = () => {
        this.setState({
            on: true,
            interval: setInterval(() => {
                this.setState({
                    index: (this.state.index + 1) % images.length,
                });
            }, 1000)
        });
    }

    stopSlider = () => {
        clearInterval(this.state.interval);
        this.setState({
            on: false,
            interval: null
        });
    }

    render() {
        return (
            <div className="slider-container">
                <img src={`./images/${images[this.state.index]}`} />
                <div className="slider-button-container">
                    <button onClick={this.prevImage}>Prev</button>
                    <button onClick={this.nextImage}>Next</button>
                    <button disabled={this.state.on} onClick={this.startSlider}>Start</button>
                    <button disabled={!this.state.on} onClick={this.stopSlider}>Stop</button>
                </div>
            </div>
        );
    }
}

export default Slider;
