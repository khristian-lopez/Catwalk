import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import ImageGallery from 'react-image-gallery';

const MyGallery = () => {

  const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
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
  return (
    <ImageGallery items={images} thumbnailPosition="left"/>
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