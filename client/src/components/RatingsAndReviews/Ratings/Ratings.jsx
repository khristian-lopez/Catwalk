import React from 'react';
import PropTypes from 'prop-types';
import ReviewsRating from '../Reviews/ReviewsRating.jsx';
import AverageRating from './AverageRating.jsx';
import AverageReview from './AverageReview.jsx';
import AverageRec from './AverageRec.jsx';
import AverageBar from './AverageBar.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class Ratings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            metadata: [],
            // todo
            avg: 0
        }
        this.getReviews = this.getReviews.bind(this)
        this.getMetadata = this.getMetadata.bind(this)
        // todo
        this.getAverageRating = this.getAverageRating.bind(this)
    }
    componentDidMount() {
        this.getReviews()
        this.getMetadata()
    }
    getReviews() {
        axios.get(`/reviews/${this.props.currentProduct.product_id}`)
            .then(res => this.setState({ reviews: res.data.results }))
            .catch(err => console.error('Cannot retrieve reviews for product', err))
    }
    getMetadata() {
        axios.get(`/reviews/meta/${this.props.currentProduct.product_id}`)
            .then(res => this.setState({ metadata: res.data }))
            .catch(err => console.error('Cannot retrieve metadata for product', err))
    }
    // todo
    getAverageRating() {
    }

    render() {
        const {reviews, metadata} = this.state;
        //console.log('reviews: ', reviews)
        return (
            <div>
            <Row>
                <div className="average-rating" style={{ fontSize: 70, textAlign: "center" }}>
                    <Col>
                        <AverageRating reviews={reviews} />
                    </Col>
                </div>
                <div id="recommend" style={{ fontSize: "13px" }}>
                    <AverageRec reviews={reviews} />
                </div> 
            </Row>
            <br></br>
            <Row>
                <div className="bar-container">
                    <Col s={1}><div id="stars"></div></Col>
                    <Col xs={9}><AverageBar reviews={reviews}/></Col>         
                </div>
            </Row>           
        </div>
        )
    }
}

Ratings.propTypes = {
    currentProduct: PropTypes.number
}

export default Ratings;

// return (
//     <div>
//     <Row>
//         <Col xs={2}>
//             <div className="average-rating" style={{ fontSize: 70, textAlign: "center" }}>
//                 <AverageRating reviews={reviews} />
//             </div>
//         </Col>
//         <Col xs={4}>
//             <ReviewsRating  reviews={reviews} />
//             {/* <AverageReview reviews={reviews}/> */}
//         </Col>
//         <div id="recommend" style={{ fontSize: "13px" }}>
//             <AverageRec reviews={reviews} />
//         </div> 
//     </Row>
//     <br></br>
//     <Row>
//         <div className="bar-container">
//             <Col s={1}><div id="stars"></div></Col>
//             <Col xs={9}><AverageBar reviews={reviews}/></Col>         
//         </div>
//     </Row>           
// </div>
// )
// }