import React, { Component } from "react";

import { connect } from 'react-redux';
import { loadSerieEpisodes, selectSeason } from '../actions';
import { bindActionCreators } from "redux";

import _ from "lodash";

class SeasonList extends Component {
  constructor(props) {
    super(props);

    this.state = { episodes : null }
  }

  componentWillMount() {
    this.props.loadSerieEpisodes(this.props.serie)
    .then(res => {
      this.setState({ episodes : _.compact(res.payload.data) })
    });
  }

  renderList() {
    
    if(_.isEmpty(this.state.episodes)){
      return "Loading..."
    }

    var filtered = _.groupBy(this.state.episodes, 'SeasonNumber' );


    // return _.map(this.props.episodes, episode => {
    //   return (
    //     <li 
    //       key={season.title}
    //       onClick={() => this.props.selectSeason(episode)}
    //       className="list-group-item"
    //     >
    //       {season.title}
    //     </li>
    //   );
    // });
  }

  render() {
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    episodes: state.episodes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectSeason, loadSerieEpisodes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SeasonList);

