/* eslint-disable react/prop-types */
import React from 'react';
import ReviewsRating from './ReviewsRating.jsx';
import Helpful from './Helpful.jsx';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import {Image, Row, Col} from 'react-bootstrap';

const ReviewTile = props => {
    function GetFormattedDate() {
        let date = props.review.date.slice(0, 10).split('-');
        let formattedDate = `${date[1]}/${date[2]}/${date[0]}`;
        return formattedDate;
    }
    console.log(props.review.photos)
    return (
        <div className="review-Tile" key={props.review.review_id}>
            <Row>
                <Col>
                    <ReviewsRating rating={props.review.rating}/>
                </Col>
                <Col xs={4}>
                    <div id="rev-user">
                        <span>{props.review['reviewer_name']} 
                        {props.review.verified ? <p style={{fontSize: "10px"}}> Verified Purchaser &#10003;</p> : null}
                        </span>
                    </div>
                </Col>
                <Col xs={2}>
                    <p id="rev-date" style={{fontSize: "15px"}}>
                        <GetFormattedDate />
                    </p>
                </Col>
            </Row>
            <div id="rev-summary" style={{fontWeight: "bold", fontSize: "18px"}}>{props.review.summary}</div>
            <div id="rev-body" style={{fontSize: "13px"}}>{props.review.body}</div>
            {!props.review.recommend ? null : <p id="rev-rec">I recommend this product<span>&#10003;</span></p>}
            {props.review.response ? 
                <div 
                    id="rev-response" style={{fontWeight: "600"}}>Response from seller:
                    <p id="seller-response" style={{fontSize: "13px"}}>{props.review.response}</p>
                </div> 
            : null}
            {/* TODO: review photo */}
            {props.review.photos > 0 ? props.review.photos.map(photo => {
                // <div style={{ padding: "5px", margin: "5px" }}>
                    <Image
                        key={photo.id} 
                        src={photo.url} 
                        style={{ 
                            height: "100px", 
                            width: "100px",
                        }}
                    />
                // </div>
                }) : null}
            <Helpful helpfulness={props.review.helpfulness} reviewId={props.review.review_id} />
        </div>
    )
}

export default ReviewTile;

// function attachPhoto() {
//     props.review.photos.map(photo => {
//         <div style={{ padding: "5px", margin: "5px" }}>
//             <Image 
//                 key={photo.id} 
//                 photo={photo.url} 
//                 style={{ 
//                     height: "100px", 
//                     width: "100px",
//                 }}
//             />
//         </div>
//     })   
// } 