import React, { Component } from "react";

import { connect } from "react-redux";
import { loadSerieInfo } from "../actions";
import { bindActionCreators } from "redux";

import Title from "../components/title";
import SerieInfos from "../components/serie-infos";
import SeasonList from "../containers/season-list";

import { Row, Col, getRowProps, getColumnProps } from 'react-flexbox-grid';

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
      background: `url(${this.state.serieInfos.Images.Background})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      // height: `${window.innerHeight}px !important`,
      height: '100%',
      overflow: 'auto',
      display: 'block'
    }

    return (
      <div className="background">
        <div style={style}>
          {/* <div className="header">
            <Title data={this.state.serieInfos} />
          </div> */}

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
              <Row middle="xs" end="xs">
                <Col md={6}>
                  <SeasonList serie={this.state.serie} />
                </Col>
              </Row>
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