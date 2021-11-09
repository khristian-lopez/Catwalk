import React from 'react';

// import react-testing methods
import {render, getByText, screen, getByTestId} from '@testing-library/react';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
// the component to test
import Overview from '../../client/src/components/overview/Overview.jsx';


// import API mocking utilities from Mock Service Worker
import {rest} from 'msw';
import {setupServer} from 'msw/node';

describe('overview module', () => {
  test('renders two rows of information', () => {
    render(<Overview />);

    const ancestor = screen.getByTestId('ov-main');
    const descendant = screen.getByTestId('ov-main-row1');
    const descendant2 = screen.getByTestId('ov-main-row2');

    expect(ancestor).toContainElement(descendant);
    expect(ancestor).toContainElement(descendant2);
  })
})