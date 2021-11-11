/* eslint-disable react/prop-types */
import React from 'react';
import Ratings from './Ratings/Ratings.jsx';
import ReviewsList from './Reviews/ReviewsList.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const RatingsAndReviews = ({currentProduct}) => {
    
    return (
        <div>
            <Container className="rr-container" data-testid="rr-container" fluid="md">
                <Row>
                    <Col xs={4}>
                        <h4 id="rr-header">RATINGS & REVIEWS</h4>
                        <div className="ratings-container">
                            <Ratings
                                currentProduct={currentProduct}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="reviews-container">
                            <ReviewsList 
                                currentProduct={currentProduct}                                                       
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default RatingsAndReviews;

// let id = currentProduct.product_id
    // console.log(currentProduct.product_id)
    // const [data, setData] = useState([])
    // const [metadata, setMetadata] = useState([])

    // useEffect(() => {
    //     grabData();
    //     grabMetadata();
    // }, [id])
    
    // const grabData = () => {
    //     axios.get(`/reviews/${id}`)
    //         .then(res => setData(res.data.results))
    //         .catch(err => console.log(err))
    // }
    // const grabMetadata = () => {
    //     axios.get(`/reviews/meta/${id}`)
    //         .then(res => setMetadata(res.data.characteristics))
    //         .catch(err => console.log(err))
    // }
    // console.log('data', data)
    // console.log('metadata', metadata)