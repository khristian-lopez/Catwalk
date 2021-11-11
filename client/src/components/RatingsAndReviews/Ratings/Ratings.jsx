import React from 'react';
import PropTypes from 'prop-types';
import AverageRating from './AverageRating.jsx';
import AverageRec from './AverageRec.jsx';
import AverageBar from './AverageBar.jsx';
import CharBreakdown from './CharBreakdown.jsx';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

class Ratings extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            reviews: [],
            metadata: [],
        }
        this.getReviews = this.getReviews.bind(this)
        this.getMetadata = this.getMetadata.bind(this)
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentProduct.product_id !== prevProps.currentProduct.product_id) {
            this.getReviews()
            this.getMetadata()
        }
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
    
    render() {
        const {reviews, metadata} = this.state;
        
        return (
            <div data-testid="ratingsList">
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
                    {/* <Col xs={10} > */}
                        <AverageBar reviews={reviews}/>
                    {/* </Col>          */}
                </div>
            </Row>
            <br></br>
            <Row>
                <CharBreakdown metadata={metadata}/>
            </Row>
        </div>
        )
    }
}

Ratings.propTypes = {
    currentProduct: PropTypes.number
}

export default Ratings;