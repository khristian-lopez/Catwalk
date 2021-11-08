/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import RowOne from './RowOne.jsx';
import RowTwo from './RowTwo.jsx';
import Col from 'react-bootstrap/Col'
import axios from 'axios';
import defaultData from './defaultData.js';

const Overview = ({ currentProduct, currentStyle }) => {
  // create a useState that obtains current product info
  const [productInfo, changeProductInfo]  = useState([])
  // create a useState that obtains current style info
  const [styleInfo, changeStyleInfo] = useState([])

  //create a useEffect to retreive the product info for currentProduct
  useEffect(() => {
    // console.log('at overview', currentProduct)
    axios.get(`/products/${currentProduct}`)
    .then(results => changeProductInfo(results.data))
    .catch(err => console.error('Not able to obtain product info', err))
  }, [currentProduct])

  // create a useEffect to retreive the style info the is selected
  useEffect(() => {
    // console.log('at styles effect', currentProduct)
    axios.get(`/products/${currentProduct}/styles`)
    .then(results => {
      for (var style of results.data) {
        if (style.style_id === currentStyle) {
          changeStyleInfo(style)
          //onlyneed to send style as an object since only one being sent and thus don't need to map over different styles
          // console.log('a', style)
          // console.log('b', style.style_id)

        }
      }
    })
    .catch(err => console.error('Not able to obtain style info', err))
  }, [currentProduct, currentStyle])
    //needs to be able to change style when product is changed (to default style) and change when a different product is chosen.

    return (
      <Container fluid="md" className="ov-main" data-testid="ov-main">
        <Row>
          <h1>Overview</h1>
        </Row>
        <Row>
          <RowOne productInfo={productInfo} styleInfo={styleInfo}/>
        </Row>
        <Row>
          <RowTwo productInfo={productInfo}/>
        </Row>
      </Container>

    )
}


export default Overview;
    // class Overview extends React.Component {
    //   constructor(props) {
    //     super(props);
    //     this.state = {
    //       productInfo: []
    //     };
    //   }

    //   componentDidMount() {
    //     // console.log(this.props.currentProduct)
    //     axios.get(`/products/${this.props.currentProduct}`)
    //       .then(results => {
    //         this.setState({
    //           productInfo: results.data
    //         })
    //       })
    //       .catch(err => console.err('was not ablet to get product info', err))
    //   }

    //   render() {
    //     return (
    //       <Container fluid="md" className="ov-main">
    //         <Row>
    //           <h1>Overview</h1>
    //         </Row>
    //         <Row>
    //           <RowOne productInfo={this.state.productInfo}/>
    //         </Row>
    //         <Row>
    //           <RowTwo productInfo={this.state.productInfo}/>
    //         </Row>
    //       </Container>
    //     )
    //   }
    // }