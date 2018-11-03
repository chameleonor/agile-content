import React, { Component } from "react";

import { Row, Col } from 'react-flexbox-grid';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <Row start="lg">
          <Col lg={6} md={6} sm={12} xs={12}>icons</Col>
          <Col lg={6} md={6} sm={12} xs={12}>sinopse</Col>
      </Row>
    );
  }
}

export default General;