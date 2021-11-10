import React from 'react';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

// import react-testing methods
import {render, getByText, screen, getByTestId} from '@testing-library/react';

// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import ActionButton from '../../client/src/components/RelatedProducts/ActionButton.jsx';

describe('ActionButton component', () => {
  test('renders a star icon if in the related products list', () => {
    render(<ActionButton card={'related'} />);

    const button = screen.getByTestId('action-button');

    expect(button).toHaveTextContent('\u2B50');
  })

  test('renders a "X" icon if in the outfit list', () => {
    render(<ActionButton card={'outfit'} />);

    const button = screen.getByTestId('action-button');

    expect(button).toHaveTextContent('\u274c');
  })
})