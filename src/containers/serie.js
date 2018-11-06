import React, { Component } from "react";

import { connect } from "react-redux";
import { loadSerieInfo } from "../actions";
import { bindActionCreators } from "redux";

import Title from "../components/title";
import SerieInfos from "../components/serie-infos";
import SeasonList from "../containers/season-list";

import { Row, Col } from 'react-flexbox-grid';

class Serie extends Component {
  constructor(props) {
    super(props);
    this.state = { serie: '', serieInfos: '' }
  }

  componentWillMount() {
    this.setState({ serie: 'SHOW123.json' });
  }

  componentDidMount() {
    this.props.loadSerieInfo(this.state.serie)
      .then(res => {
        this.setState({ serieInfos: res.payload.data })
      })
  }

  render() {

    if (this.state.serieInfos === '') {
      return <div>Loading...</div>;
    }

    const style = {
      // background: `url(${this.state.serieInfos.Images.Background}), linear-gradient(to bottom, transparent 90%, black 90%)`,
      background: `linear-gradient(to left, transparent -50%, #0a0b0c 100%), url(${this.state.serieInfos.Images.Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // height: `${window.innerHeight}px !important`,
      height: '100%',
      overflow: 'hidden',
      display: 'block'
    }

    return (
      <div className="background">
        <div style={style}>
          <div className="header">
            <div className="container">
              <Row middle="xs" start="xs">
                <Col lg={12} md={12} sm={12} xs={12}>
                  <Title data={this.state.serieInfos} />
                </Col>
              </Row>
            </div>
          </div>

          <div className="content">
            <div className="container">
              <SeasonList serie={this.state.serie} />
            </div>
          </div>

          <div className="footer">
            <div className="container">
              <SerieInfos serieInfos={this.state.serieInfos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadSerieInfo }, dispatch);
}

export default connect(null, mapDispatchToProps)(Serie);