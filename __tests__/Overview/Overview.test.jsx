import React from 'react';

// import react-testing methods
import {render, getByText, screen, getByTestId} from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import Overview from '../../client/src/components/overview/Overview.jsx';
import MyGallery from '../../client/src/components/overview/MyGallery.jsx';


// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';


test('renders two rows of information, and 4 columns of dom elements', async () => {
  render(<Overview />);

  const ancestor = await screen.getByTestId('ov-main');
  const row1 = await screen.getByTestId('ov-main-row1');
  const row2 = await screen.getByTestId('ov-main-row2');
  const col1 = await screen.getByTestId('image-gallery-col')
  const col2 = await screen.getByTestId('style-info')
  const col3 = await screen.getByTestId('product-info')
  const col4 = await screen.getByTestId('social-links')

  expect(ancestor).toContainElement(row1);
  expect(ancestor).toContainElement(row2);
  expect(row1).toContainElement(col1)
  expect(row1).toContainElement(col2)
  expect(row2).toContainElement(col3)
  expect(row2).toContainElement(col4)
})

// test('renders an image gallery', async () => {
//   render(<MyGallery />)

//   const ancestor = await screen.getByTestId('ov-main-row1')
//   const decendant = await screen.getByTestId('image-gallery-slide')

//   expect(ancestor).toContainElement(decendant)
// })