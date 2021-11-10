/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import ImageGallery from 'react-image-gallery';
// import defaultData from './defaultData.js';


const MyGallery = ({ styleInfo }) => {

  var styleImages = [];
  if(styleInfo.photos) {
    styleInfo.photos.forEach(photo => {
      var photoObj = {}
      photoObj['original'] = photo.url
      photoObj['thumbnail'] = photo.thumbnail_url
      styleImages.push(photoObj)
    })
  }
  const defaultImages = [
    {
      original: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

  const images = (styleImages || defaultImages);

  return (
    <Col className='col1' xs={8} data-testid="image-gallery-col">
      <ImageGallery items={images} thumbnailPosition="left" className="image-gallery-slide"/>
    </Col>
  );
};

export default MyGallery;
  // <Col className='col1' xs={8}>
  //   <Container>
  //   <Carousel variant="dark">
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="assets/product-image-placeholder-300x300.jpeg"
  //         alt="First slide"
  //       />
  //       <Carousel.Caption>
  //         <h3>First slide label</h3>
  //         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="assets/product-image-placeholder-300x300.jpeg"
  //         alt="Second slide"
  //       />

  //       <Carousel.Caption>
  //         <h3>Second slide label</h3>
  //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //     <Carousel.Item>
  //       <img
  //         className="d-block w-100"
  //         src="assets/product-image-placeholder-300x300.jpeg"
  //         alt="Third slide"
  //       />

  //       <Carousel.Caption>
  //         <h3>Third slide label</h3>
  //         <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
  //       </Carousel.Caption>
  //     </Carousel.Item>
  //   </Carousel>
  //   </Container>
  // </Col>