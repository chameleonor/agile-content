import React, { Component } from "react";
import General from "./general";
import Elenco from "./elenco";
import Premio from "./premio";

import { Row, Col } from 'react-flexbox-grid';

class SerieInfos extends Component {
  constructor(props) {
    super(props);
    this.state = { options: { 1: "General", 2: "Elenco", 3: "Principales Premios" }, option: 0, height: null, selectedTabId: null }

    this.updateDimensions = this.updateDimensions.bind(this);
    // this.selectOption = this.selectOption.bind(this);
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
    this.setState({ option: 1, selectedTabId: 1 });
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    // this.setState({ option: 1, selectedTabId: 1 });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  renderInfo() {
    console.log(this.state.option)

    switch (this.state.option) {
      case 1:
        return <General data={this.props.serieInfos} />
        break;
      case 2:
        return <Elenco data={this.props.serieInfos} />
        break;
      case 3:
        return <Premio data={this.props.serieInfos} />
        break;
      default:
        // <General data={this.props.serieInfos} />
        break;
    }
  }

  selectOption(key) {
    this.setState({ option: key, selectedTabId: key })
  }

  isActive(key) {
    return this.state.selectedTabId === key;
  }

  renderList() {

    const options = this.state.options

    if (_.isEmpty(options)) {
      return "Loading..."
    }

    return _.map(options, (value, key) => {
      return (
        <li
          key={key}
          onClick={() => this.selectOption(key)}
          className={this.isActive(key) ? 'liActive' : null}
        >
          {value}
        </li>
      );
    });
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
              <li onClick={() => { this.selectOption(1) }} className={this.isActive(1) ? 'liActive' : null}>General</li>
              <li onClick={() => { this.selectOption(2) }} className={this.isActive(2) ? 'liActive' : null}>Elenco</li>
              <li onClick={() => { this.selectOption(3) }} className={this.isActive(3) ? 'liActive' : null}>Principales Premios</li>
              {/* {this.renderList()} */}
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