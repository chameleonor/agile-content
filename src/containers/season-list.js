import React, { Component } from "react";
import EpisodesList from "../components/episodes-list";

import { connect } from 'react-redux';
import { loadSerieEpisodes } from '../actions';
import { bindActionCreators } from "redux";

import { Row, Col } from 'react-flexbox-grid';

import _ from "lodash";

class SeasonList extends Component {
  constructor(props) {
    super(props);

    this.state = { episodes: null, selectedSeason: null }
  }

  componentWillMount() {
    this.props.loadSerieEpisodes(this.props.serie)
      .then(res => {
        var group = _.groupBy(_.compact(res.payload.data), 'SeasonNumber');
        this.setState({ episodes: group, selectedSeason: group[1] })
      });
  }

  selectSeason(selectedSeason) {
    this.setState({ selectedSeason })
  }

  renderList() {

    if (_.isEmpty(this.state.episodes)) {
      return "Loading..."
    }

    return _.map(this.state.episodes, (value, key) => {
      return (
        <li
          key={key}
          onClick={() => this.selectSeason(value)}
        >
          {key}
        </li>
      );
    });
  }

  renderEpisodes() {
    if (!this.state.episodes) {
      return <div>Loading...</div>;
    }

    return (
      <EpisodesList season={this.state.selectedSeason} />
    )
  }

  render() {
    return (
      <div className="season-list">
        <Row top="lg" end="lg">
          <Col md={6}>

            <nav>
              <ul>
                {this.renderList()}
              </ul>
            </nav>

            {this.renderEpisodes()}
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    episodes: state.episodes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadSerieEpisodes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SeasonList);

