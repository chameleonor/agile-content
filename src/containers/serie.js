import React, { Component } from "react";

import { connect } from "react-redux";
import { loadSerieInfo } from "../actions";
import { bindActionCreators } from "redux";

import Title from "../components/title";
import SeasonList from "../containers/season-list";
import SerieInfos from "../components/serie-infos";

class Serie extends Component {
  constructor(props) {
    super(props);
    this.state = { serie : '', serieInfos : ''}
  }

  componentWillMount() {
    this.setState({serie : 'SHOW123.json'});
  }

  componentDidMount() {
    this.props.loadSerieInfo(this.state.serie)
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
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: `${window.innerHeight}px !important`,
        overflow:'hidden',
    }

    return (
      <div className="background">
        <div style={style}>
          HOME
          <Title data={this.state.serieInfos}/>
          <SeasonList serie={this.state.serie}/>
          <SerieInfos />
        </div>
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
  return bindActionCreators({ loadSerieInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Serie);