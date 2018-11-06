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

    this.state = { episodes: null, selectedSeason: null, colSize: null, isActive: false, };

    this.toggleClass = this.toggleClass.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  toggleClass() {
    const currentState = this.state.isActive;
    this.setState({ isActive: !currentState });
  };

  updateDimensions() {
    if (window.innerWidth <= 768) {
      console.log('=========> 768')
      this.setState({
        colSize: "lg"
      })
    } else if (1150 >= window.innerWidth && window.innerWidth > 768) {
      console.log('=========> 991')
      this.setState({
        colSize: "md"
      })
    } else if (1400 >= window.innerWidth && window.innerWidth > 1150) {
      console.log('=========> 991')
      this.setState({
        colSize: "sm"
      })
    } else if (window.innerWidth > 1400) {
      console.log('=========> 991')
      this.setState({
        colSize: "xs"
      })
    }
    // console.log('hi')
  }

  componentWillMount() {

    this.updateDimensions();

    this.props.loadSerieEpisodes(this.props.serie)
      .then(res => {
        var group = _.groupBy(_.compact(res.payload.data), 'SeasonNumber');
        this.setState({ episodes: group, selectedSeason: group[1] })
      });

    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  selectSeason(selectedSeason, e) {
    e.preventDefault();
    console.log(e)
    this.toggleClass()
    this.setState({ selectedSeason })
    // this.setState.()
  }

  renderList() {

    if (_.isEmpty(this.state.episodes)) {
      return "Loading..."
    }

    return _.map(this.state.episodes, (value, key) => {
      return (
        <li
          key={key}
          onClick={(e) => this.selectSeason(value, e)}
          className={this.state.isActive ? 'liActive' : null}
        >
          T{key}
        </li>
      );
    });
  }

  renderEpisodes() {
    if (!this.state.episodes) {
      return <div>Loading...</div>;
    }

    return (
      <div className="episodes-list">
        <EpisodesList season={this.state.selectedSeason} />
      </div>
    )
  }

  render() {

    return (
      <div className="season-list">
        <Row top="lg" end="xs">
          <Col className={this.state.colSize}>

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

