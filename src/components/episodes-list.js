import React, { Component } from "react";

import Collapsible from './collapsible';

class EpisodesList extends Component {
    constructor(props){
        super(props)
    }

    renderList() {
        return _.map(this.props.data, episode => {
            return (
            <li 
                key={episode.ID}
                // onClick={() => this.selectEpisode(episode)}
                className="list-group-item"
            >
                <Collapsible data={episode} />
            </li>
            );
        });
    }

    render() {
        return (
            <div className="episodes-list">
                <ul className="list-group">
                    {this.renderList()}
                </ul>
            </div>
        );
    }
}


export default EpisodesList;
