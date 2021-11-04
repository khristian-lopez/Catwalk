import React from 'react';
import data from '../dummyReviews.js';
import ReviewsRating from '../Reviews/ReviewsRating.jsx';
import RatingsBar from './RatingsBar.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Ratings = () => {
    let results = data.results
    let ratings = []
    let recommend = [];
    let total = 0
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
    // TODO: implement something to make the bar rating
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
    //console.log(starCount)

    return (
        <div>
            <Row>
                <Col xs={2}>
                    <div className="average-rating" style={{ fontSize: 70 }}>{avgRating}</div>
                </Col>
                <Col xs={4}>
                    <ReviewsRating rating={avgRating} />
                </Col>
                <div id="recommend">{avgRecommend}% of reviews recommend this product
                </div> 
            </Row>
            <br></br>
            <Row>
                <div className="bar-container">
                        <Row>
                            <Col s={1}>
                                <div id="5-star">5 Stars</div>
                            </Col>
                            <Col xs={9}>
                                <RatingsBar star={starCount[5]}/>
                            </Col>
                        </Row>   
                        <Row>    
                            <Col s={1}>
                                <div id="4-star">4 Stars</div>
                            </Col>
                            <Col xs={9}>
                                <RatingsBar star={starCount[4]}/>
                            </Col>  
                        </Row>
                        <Row>       
                            <Col s={1}>
                                <div id="3-star">3 Stars</div>
                            </Col>
                            <Col xs={9}>
                                <RatingsBar star={starCount[3]}/>
                            </Col>
                        </Row>    
                        <Row>    
                            <Col s={1}>
                                <div id="2-star">2 Stars</div>
                            </Col>
                            <Col xs={9}>
                                <RatingsBar star={starCount[2]}/>
                            </Col>
                        </Row>                   
                        <Row>    
                            <Col s={1}>
                                <div id="1-star">1 Stars</div>
                            </Col>
                            <Col xs={9}>
                                <RatingsBar star={starCount[1]}/>
                            </Col>
                        </Row>
                </div>
            </Row>
            
        </div>
    )
}

export default Ratings;
