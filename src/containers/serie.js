import React, { Component } from "react";

import { connect } from "react-redux";
import { loadSerie } from "../actions";
import { bindActionCreators } from "redux";

import Title from "../components/title";
import EpisodesList from "../components/episodes-list";
import SerieInfos from "../components/serie-infos";

import _ from "lodash";

const ROOT_URL = `https://sample-api-78c77.firebaseio.com/tv-shows`;

class Serie extends Component {
  constructor(props) {
    super(props);
    this.state = { urlItem : '', serieInfos : ''}
  }

  componentWillMount() {
    this.setState({urlItem : 'SHOW123.json'});
  }

  componentDidMount() {
    this.props.loadSerie(this.state.urlItem)
    .then(res => {
      this.setState({ serieInfos: res.payload.data })
    } )
  }

  render() {

    if (this.state.serieInfos === '') {
      return <div>Loading...</div>;
    }

    const style = {
        background : `url(${this.state.serieInfos.Images.Background})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height:`${window.innerHeight}px !important`,
        overflow:'hidden',
        height: '100%'
        // backgroundColor: 'red'
    }

    return (
        <div style={style}>
          HOME
          <Title data={this.state.serieInfos}/>
          <EpisodesList />
          <SerieInfos />
        </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     serie: state.serie
//   };
// }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadSerie }, dispatch);
}

export default connect(null, mapDispatchToProps)(Serie);