import React from 'react';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

// import react-testing methods
import {render, getByText, screen, getByTestId} from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import RelatedProducts from '../../client/src/components/RelatedProducts/RelatedProducts.jsx';

xdescribe('related RelatedProductCard component', () => {
  test('renders a related products list and an outfit list', () => {
    render(<RelatedProducts />);

    const ancestor = screen.getByTestId('related-products');
    const descendant = screen.getByTestId('related-prod-list');
    const descendant2 = screen.getByTestId('outfit');

    expect(ancestor).toContainElement(descendant);
    expect(ancestor).toContainElement(descendant2);
  })
})