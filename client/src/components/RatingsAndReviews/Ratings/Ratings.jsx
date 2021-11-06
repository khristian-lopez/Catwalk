import React from 'react';
import PropTypes from 'prop-types';
import data from '../dummyReviews.js';
import ReviewsRating from '../Reviews/ReviewsRating.jsx';
import RatingsBar from './RatingsBar.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const Ratings = (props) => {
    
    let results = data.results
    let ratings = [];
    let recommend = [];
    let total = 0;


    for (let i = 0; i < results.length; i++) {
        let rating = results[i]['rating']
        let recc = results[i]['recommend']
        ratings.push(rating)
        recommend.push(recc);
        total += rating
    }
    const recommendCount = recommend.filter(Boolean).length
    const avgRecommend = Math.round(recommendCount / recommend.length * 100) 
    
    const avgRating = total / ratings.length

    let starCount = {
        5: 0,
        4: 0,
        3: 0,
        2: 0,
        1: 0
    }

    const stars = results.map(review => {
        starCount[review.rating] += 1;
        
        return starCount;
    }, stars)

    return (
        <div>
            <Row>
                <Col xs={2}>
                    <div className="average-rating" style={{ fontSize: 70, textAlign: "center" }}>{avgRating}</div>
                </Col>
                <Col xs={4}><ReviewsRating rating={avgRating} /></Col>
                <div id="recommend" style={{ fontSize: "15px" }}>{avgRecommend}% of reviews recommend this product</div> 
            </Row>
            <br></br>
            <Row>
                <div className="bar-container">
                        <Row>
                            <Col s={1}><div id="5-star">5 Stars</div></Col>
                            <Col xs={9}><RatingsBar star={starCount[5] / results.length}/></Col>
                        </Row>   
                        <Row>    
                            <Col s={1}><div id="4-star">4 Stars</div></Col>
                            <Col xs={9}><RatingsBar star={starCount[4] / results.length}/></Col>  
                        </Row>
                        <Row>       
                            <Col s={1}><div id="3-star">3 Stars</div></Col>
                            <Col xs={9}><RatingsBar star={starCount[3] / results.length}/></Col>
                        </Row>    
                        <Row>    
                            <Col s={1}><div id="2-star">2 Stars</div></Col>
                            <Col xs={9}><RatingsBar star={starCount[2] / results.length}/></Col>
                        </Row>                   
                        <Row>    
                            <Col s={1}><div id="1-star">1 Stars</div></Col>
                            <Col xs={9}><RatingsBar star={starCount[1] / results.length}/></Col>
                        </Row>
                </div>
            </Row>           
        </div>
    )
}

Ratings.propTypes = {
    currentProduct: PropTypes.object
}

export default Ratings;
