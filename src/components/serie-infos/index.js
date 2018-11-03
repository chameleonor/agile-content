import React, { Component } from "react";
import General from "./general";
import Elenco from "./elenco";
import Premio from "./premio";

import { Row, Col } from 'react-flexbox-grid';

class SerieInfos extends Component {
  constructor(props) {
    super(props);

    this.state = { option: 0 }
  }

  renderInfo() {
    switch (this.state.option) {
      case 0:
        return (
          <General data={this.props.serieInfos} />
        )
        break;
      case 1:
        return (
          <Elenco data={this.props.serieInfos} />
        )
        break;
      case 2:
        return (
          <Premio data={this.props.serieInfos} />
        )
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <Row  middle="lg" start="lg">

        <Col lg={12} md={12} sm={12} xs={12}>
            <nav>
              <ul clasName="serie-infos-menu">
                <li onClick={() => { this.setState({ option: 0 }) }}>General</li>
                <li onClick={() => { this.setState({ option: 1 }) }}>Elenco</li>
                <li onClick={() => { this.setState({ option: 2 }) }}>Principales Premios</li>
              </ul>
            </nav>
        </Col>

        <Col lg={12} md={12} sm={12} xs={12}>
            {this.renderInfo()}
        </Col>
      </Row>
    );
  }
}

export default SerieInfos;