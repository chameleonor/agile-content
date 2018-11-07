import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Collapsible extends Component {

    constructor(props){
        super(props)
        this.state = {
            isExpanded: false
        }
    }

    handleToggle(e){
        e.preventDefault();

        console.log(this.refs.inner.clientHeight)

        this.setState({
            isExpanded: !this.state.isExpanded,
            height: this.refs.inner.clientHeight
        })
    }

    render(){

        const {Duration, EpisodeNumber, Title, Image, Synopsis} = this.props.data;
        const {isExpanded, height} = this.state;
        const currentHeight = isExpanded ? height : 0;

        const imageStyle = {
            backgroundImage : `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "20em",
            overflow:'hidden',
            width: '100%',
            margin: '5px 0',
            filter: 'brightness(60%)'
        }

        return (
            <div className={`panel ${isExpanded ? 'is-expanded' : ''}`} onClick={(e) => this.handleToggle(e)}>
                <div className="panel-heading">
                    <h4>{EpisodeNumber} {Title}</h4>
                </div>
                <div className={`panel-collapse ${isExpanded ? 'mrg-bt' : ''}`} style={{height: currentHeight+'px'}}>
                    <div className="panel-body" ref="inner">
                        <div style={imageStyle}></div>
                        <p>{Synopsis}</p>
                    </div>
                </div>
            </div>
        )
    }

}

Collapsible.propTypes = {
    title: PropTypes.string,
};

export default Collapsible;