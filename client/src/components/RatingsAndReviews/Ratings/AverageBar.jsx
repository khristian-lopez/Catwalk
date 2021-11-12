import React from 'react';
import RatingsBar from './RatingsBar.jsx';
import {Col, Row} from 'react-bootstrap';

const AverageBar = (props) => {
    let total = 0;
    let count = {
        1: 0,
        2: 0,
        3: 0,
        4: 0, 
        5: 0
    }
    props.reviews.map((review) => {
        count[review.rating] += 1
    })

    for (let rating in count) {
        total += count[rating];
    }
    
    return Object.keys(count).reverse().map(star => (
        <Row id="avgRevStar" key={star}>
            <Col xs="auto" >{star} star</Col>
            <Col ><RatingsBar rating={count[star]} total={total}/></Col>
        </Row>
    ))
}

export default AverageBar;
