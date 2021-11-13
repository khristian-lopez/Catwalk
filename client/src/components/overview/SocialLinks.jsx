/* eslint-disable react/prop-types */
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import {FacebookShareButton, FacebookIcon, PinterestShareButton, PinterestIcon,TwitterShareButton, TwitterIcon} from 'react-share';

const SocialLinks = ({ productInfo }) => (
  <Col data-testid="social-links" className="ov-social-links-col">
    <div>
      <h5 className="ov-social-header">Click to Share!</h5>
      <Container className="ov-social-links">
        <TwitterShareButton
          url={"https://github.com/tech-guys-47/project-catwalk"}
          quote={productInfo.slogan}
          hashtag="#techGuy's">
          <TwitterIcon size={36} round={true} />
        </TwitterShareButton>
        <FacebookShareButton
          url={"https://github.com/tech-guys-47/project-catwalk"}
          quote={productInfo.slogan}
          hashtag="#techGuy's">
          <FacebookIcon size={36} round={true} />
        </FacebookShareButton>
        <PinterestShareButton
          url={"https://github.com/tech-guys-47/project-catwalk"}
          quote={productInfo.slogan}
          hashtag="#techGuy's">
          <PinterestIcon size={36} round={true} />
        </PinterestShareButton>
      </Container>

    </div>

  </Col>
);

export default SocialLinks;