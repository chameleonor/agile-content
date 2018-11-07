import React, { Component } from "react";
import General from "./general";
import Elenco from "./elenco";
import Premio from "./premio";

import { Row, Col } from 'react-flexbox-grid';

class SerieInfos extends Component {
  constructor(props) {
    super(props);
    this.state = { option: 0, height: null }

    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    if (window.innerWidth <= 768) {
      this.setState({
        height: "65%"
      })
    } else {
      this.setState({
        height: "100%"
      })
    }
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
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
    const contentStyle = {
      height: this.state.height,
    }

    return (
      // <Row middle="lg" start="lg">
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <nav className="serie-infos-menu">
            <ul>
              <li onClick={() => { this.setState({ option: 0 }) }}>General</li>
              <li onClick={() => { this.setState({ option: 1 }) }}>Elenco</li>
              <li onClick={() => { this.setState({ option: 2 }) }}>Principales Premios</li>
            </ul>
          </nav>
        </Col>

        <Col lg={12} md={12} sm={12} xs={12} style={contentStyle}>
          {this.renderInfo()}
        </Col>
      </Row>
    );
  }
}

export default SerieInfos;