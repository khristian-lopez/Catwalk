/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import Col from 'react-bootstrap/Col'
import axios from 'axios';



class Overview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productInfo: []
    };
  }

  componentDidMount() {
    // console.log(this.props.currentProduct.product_id)
    axios.get(`/products/${this.props.currentProduct.product_id}`)
      .then(results => {
        this.setState({
          productInfo: results.data
        })
      })
      .catch(err => console.err('was not ablet to get product info', err))
  }

  render() {
    return (
      <Container fluid="md" className="ov-main">
        <Row>
          <h1>Overview</h1>
        </Row>
        <Row>
          <RowOne productInfo={this.state.productInfo}/>
        </Row>
        <Row>
          <RowTwo productInfo={this.state.productInfo}/>
        </Row>
      </Container>
    )
  }
}

export default Overview;


// const Overview = (props) => (
//   <Container fluid="md" className="ov-main">
//     <Row>
//       <h1>Overview</h1>
//     </Row>
//     <Row>
//       <RowOne currentProduct={props}/>
//     </Row>
//     <Row>
//       <RowTwo currentProduct={props.currentProduct}/>
//     </Row>
//   </Container>
// )