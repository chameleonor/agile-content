import React, { Component } from "react";

class EpisodesList extends Component {
    constructor(props){
        super(props)
    }

    renderList() {

        return _.map(this.props.data, episode => {
            return (
            <li 
                key={episode.ID}
                onClick={() => this.selectEpisode(episode)}
                className="list-group-item"
            >
                {episode.EpisodeNumber} {episode.Title}
            </li>
            );
        });
    }

    render() {
        return (
            <div>{this.renderList()}</div>
        );
    }
}


export default EpisodesList;
