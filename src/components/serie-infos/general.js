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
            <Row start="lg" className="general">
                <Col lg={4} md={4} sm={12} xs={12}>
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
                <Col lg={8} md={8} sm={12} xs={12}>
                    <h3>Sinopse</h3>
                    <p>{this.props.data.Synopsis}</p>
                </Col>
            </Row>
        );
    }
}

export default General;