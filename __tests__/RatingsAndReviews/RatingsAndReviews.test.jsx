import React from 'react';
import RatingsAndReviews from '../../client/src/components/RatingsAndReviews/RatingsAndReviews.jsx';
import {render, getByText, screen, getByTestId} from '@testing-library/react';
import '@testing-library/jest-dom';

// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

describe('ratings and reviews module', () => {
    test('renders ratings and reviews list', () => {
        render(<RatingsAndReviews />)

        const ancestor = screen.getByTestId('rr-container')
        const descendant = screen.getByTestId('reviewsList')
        const descendant2 = screen.getByTestId('ratingsList')

        expect(ancestor).toContainElement(descendant)
        expect(ancestor).toContainElement(descendant2)
    })
})
