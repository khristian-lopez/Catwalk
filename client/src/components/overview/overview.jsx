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

/*
// const Overview = ({ currentProduct, currentStyle }) => (
    //create a useState that obtains current product info
    //cost [productInfo, changeProductInfo]  = useState([])
    create a useState that obtains current style info
    const [styleInfo, changeStyleInfo] = useState([])

    //create a useEffect to retreive the product info for currentProduct
    //useEffect(() => {
      axios.get(`/products/${currentProduct}`)
      .then(results => changeProductInfo(results.data))
      .catch(err => console.error('Not able to obtain product info', err))
    }, [currentProduct.product_id])

    create a useEffect to retreive the style info the is selected
    useEffect(() => {
      axios.get(`/products/${currentProduct}/styles`)
      .then(results => {
        for (var style in results.data) {
          if (style.style_id === currentStyle) {
            changeStyleInfo([style])
          }
        }
      .catch(err => console.error('Not able to obtain product info', err))
    }, [currentProduct.product_id, currentStyle])
    //needs to be able to change style when product is changed (to default style) and change when a different product is chosen.


//   <Container fluid="md" className="ov-main">
//     <Row>
//       <h1>Overview</h1>
//     </Row>
//     <Row>
//       <RowOne productInfo={productInfo} styleInfo={styleInfo}/>
//     </Row>
//     <Row>
//       <RowTwo productInfo={productInfo}/>
//     </Row>
//   </Container>
// )
*/