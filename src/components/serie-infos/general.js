import React, { Component } from "react";
import { Row, Col } from 'react-flexbox-grid';
import Icon from '../icon';

const facebookIcon = 'public/img/facebook.svg'

class General extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <Row start="lg">
                <Col lg={6} md={6} sm={12} xs={12}>
                    <nav>
                        <ul>
                            <li
                                key="facebook"
                                onClick={(e) => { alert(e) }}
                            >
                                <Icon urlicon={facebookIcon} icon="facebook" />
                            </li>
                            <li
                                key="a"
                                onClick={(e) => { alert(e) }}
                            >
                                <Icon urlicon={facebookIcon} icon="facebook" />
                            </li>
                            <li
                                key="b"
                                onClick={(e) => { alert(e) }}
                            >
                                <Icon urlicon={facebookIcon} icon="facebook" />
                            </li>
                        </ul>
                    </nav>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>sinopse</Col>
            </Row>
        );
    }
}

export default General;