import React, { Component } from "react";

import { Carousel } from "react-responsive-carousel";

import _ from "lodash";

import "react-responsive-carousel/lib/styles/carousel.min.css";

class Elenco extends Component {
    constructor(props) {
        super(props);
        this.state = {
            axis: null,
            carouselOptions: "standard",
            showIndicators: null,
            showArrows: null,
            centerSlidePercentage: null,
            centerMode: null

        }

        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        if (window.innerWidth <= 768) {
            this.setState({
                axis: "vertical",
                showIndicators: true,
                showArrows: false,
                centerSlidePercentage: 100,
                centerMode: false
            })
        } else {
            this.setState({
                axis: "horizontal",
                showIndicators: false,
                showArrows: true,
                centerSlidePercentage: 35,
                centerMode: true
            })
        }
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    renderCarousel() {

        const aditions = {
            axis: this.state.axis,
            carouselOptions: this.state.carouselOptions,
            showIndicators: this.state.showIndicators,
            showArrows: this.state.showArrows,
            centerSlidePercentage: this.state.centerSlidePercentage,
            centerMode: this.state.centerMode
        }

        return (
            <Carousel
                autoPlay={false}
                showThumbs={false}
                axis="horizontal"
                showStatus={false}
                {...aditions}
            >
                {this.renderItens()}
            </Carousel>
        );
    }

    renderItens() {

        return _.map(this.props.data.Cast, author => {
            return (
                <div key={author.ID}>
                    {author.Name}
                </div>
            );
        });
    }

    render() {

        if (_.isNull(this.props.data)) {
            return "Loading..."
        }

        return (
            <div className="elenco-carousel">{this.renderCarousel()}</div>
        );
    }
}

export default Elenco;