import React, { Component } from "react";
import { Row, Col } from 'react-flexbox-grid';
import Icon from '../icon';

const addIcon = 'public/img/add-gray-s.svg'
const sadIcon = 'public/img/sad-gray-w.svg'
const recIcon = 'public/img/rec-gray-s.svg'
const shareIcon = 'public/img/share-gray-s.svg'

class General extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (
            <Row start="lg" className="general">
                <Col lg={4} md={4} sm={12} xs={12}>
                    <ul>
                        <li
                            key="addIcon"
                        >
                            <Icon urlicon={addIcon}>
                                <div>Mi Lista</div>
                                </Icon>
                        </li>
                        <li
                            key="sadIcon"
                        >
                            <Icon urlicon={sadIcon}>
                                <div>Evaluar</div>
                                </Icon>
                        </li>
                        <li
                            key="recIcon"
                        >
                            <Icon urlicon={recIcon}>
                                <div>Grabar</div>
                                </Icon>
                        </li>
                        <li
                            key="shareIcon"
                        >
                            <Icon urlicon={shareIcon}>
                                <div>Compartir</div>
                                </Icon>
                        </li>
                    </ul>
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