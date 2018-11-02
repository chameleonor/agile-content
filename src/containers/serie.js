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
          <Title />
          <EpisodesList />
          <SerieInfos />
        </div>
    );
  }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props
    return {
      serie: state.serie
    };
  }
  
  // Anything returned from this function will end up as props
  // on the BookList container
  function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result shoudl be passed
    // to all of our reducers
    return bindActionCreators({ loadSerie }, dispatch);
  }
  
  // Promote BookList from a component to a container - it needs to know
  // about this new dispatch method, selectBook. Make it available
  // as a prop.
  export default connect(mapStateToProps, mapDispatchToProps)(Serie);
  // export default Serie;