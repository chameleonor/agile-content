import React, { Component } from "react";

import Collapsible from './collapsible';

class EpisodesList extends Component {
    constructor(props) {
        super(props)
    }

    renderList() {
        return _.map(this.props.season, episode => {
            return (
                <li key={episode.ID}>
                    <Collapsible data={episode} />
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}


export default EpisodesList;
