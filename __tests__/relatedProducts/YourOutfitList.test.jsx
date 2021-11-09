import React from 'react';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

// import react-testing methods
import {render, getByText, screen, getByTestId} from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import YourOutfitList from '../../client/src/components/RelatedProducts/YourOutfitList.jsx';

describe('YourOutfitList component', () => {

  const sampleProduct = {
    product_id: '42370'
  }

  test('renders an add-to-outfit card', () => {
    render(<YourOutfitList currentProduct={sampleProduct} />);

    const ancestor = screen.getByTestId('outfit');
    const descendant = screen.getByTestId('add-outfit');

    expect(ancestor).toContainElement(descendant);
  })
})