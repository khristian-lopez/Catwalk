import React from 'react';
import PropTypes from 'prop-types';
import Ratings from './Ratings/Ratings.jsx';
import ReviewsList from './Reviews/ReviewsList.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';

class RatingsAndReviews extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            metadata: {}
        }
        this.getReviews = this.getReviews.bind(this)
        this.getRatings = this.getRatings.bind(this)
    }
    componentDidMount() {
        this.getReviews()
        this.getRatings()
    }
    // TODO: make axios call to retrieve specific product id reviews
    getReviews() {
        axios.get(`/reviews/${this.props.currentProduct}`)
            .then(({data}) => this.setState({ reviews: data.results }))
            .catch(err => console.error(err))        
    }
    getRatings() {
        axios.get(`/reviews/meta/${this.props.currentProduct}`)
            .then(({data}) => this.setState({ metadata: data }))
            .catch(err => console.error(err))
    }
    // TODO: after making axios call, pass down state into each components

    render() {
        console.log(this.state.metadata)
        // console.log(this.state.reviews)
        const {reviews, metadata} = this.state
        return (
            <div>
                <Container className="rr-container" fluid="md">
                    <Row>
                        <Col xs={4}>
                            <h5 id="rr-header">RATINGS & REVIEWS</h5>
                            <div className="ratings-container">
                                <Ratings 
                                 metadata={metadata}
                                
                                />
                            </div>
                        </Col>
                        <Col>
                            <div className="reviews-container">
                                <ReviewsList 
                                currentProduct={this.props.currentProduct}                        
                                />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }    
}

RatingsAndReviews.propTypes = {
    currentProduct: PropTypes.number.isRequired
}

export default RatingsAndReviews;


// class RatingsAndReviews extends React.Component {
//     // TODO: make axios call to retrieve specific product id 
//     // TODO: after making axios call, pass down state into each components
//     constructor(props) {
//         super(props)

//         this.state = {
//             reviews: [],
//         }
//         this.getReviews = this.getReviews.bind(this)
//     }
//     componentDidMount() {
//         this.getReviews(this.state.reviews)
//     }
//     getReviews() {
//         axios.get(`reviews/${this.props.currentProduct.product_id}`)
//             .then(res => res.data)
//             .then(data => this.setState({ reviews: data }))
//     }
    
//     render() {
//         console.log(this.state.reviews)
//         return (
//             <div>
//                 <Container className="rr-container" fluid="md">
//                     <Row>
//                         <Col xs={4}>
//                             <h5 id="rr-header">RATINGS & REVIEWS</h5>
//                             <div className="ratings-container">
//                                 <Ratings 
//                                  //currentProduct={this.props.currentProduct}
//                                 review={this.state.reviews}
//                                 />
//                             </div>
//                         </Col>
//                         <Col>
//                             <div className="reviews-container">
//                                 <ReviewsList 
//                                  currentProduct={this.props.currentProduct}
//                                  //reviews={this.props.reviews}
//                                 />
//                             </div>
//                         </Col>
//                     </Row>
//                 </Container>
//             </div>
//         )    
//     }
// }

// RatingsAndReviews.propTypes = {
//     currentProduct: PropTypes.object,
//     reviews: PropTypes.object
// }
