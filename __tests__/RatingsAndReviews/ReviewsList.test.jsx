import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, getByText, screen} from '@testing-library/react';

import '@testing-library/jest-dom';
import ReviewsList from '../../client/src/components/RatingsAndReviews/Reviews/ReviewsList.jsx';
import { afterAll } from 'jest-circus';

describe('ReviewsList component', () => {
    const route = '/reviews/42366';

    const server = setupServer(
        rest.get(route, (req, res, ctx) => {
            return res(ctx.json([{
                "product": "42366",
                "page": 0,
                "count": 5,
                "results": [
                    {
                        "review_id": 1094673,
                        "rating": 5,
                        "summary": "Is this really the best purchase ever?",
                        "recommend": true,
                        "response": null,
                        "body": "Wow this product is amazing, 100/10 recommend. I own 1000 of these muahahaha. ",
                        "date": "2021-11-10T00:00:00.000Z",
                        "reviewer_name": "BananaBoy123",
                        "helpfulness": 3,
                        "photos": []
                    },
                    {
                        "review_id": 841094,
                        "rating": 3,
                        "summary": "Wow awesome puchrase",
                        "recommend": false,
                        "response": null,
                        "body": "Best product ever wow amazing  1 2 3 4 testing one two",
                        "date": "2021-09-17T00:00:00.000Z",
                        "reviewer_name": "jackson2",
                        "helpfulness": 3,
                        "photos": []
                    },
                    {
                        "review_id": 1094674,
                        "rating": 5,
                        "summary": "Is this really the best purchase ever?",
                        "recommend": true,
                        "response": null,
                        "body": "Wow this product is amazing, 100/10 recommend. I own 1000 of these muahahaha. ",
                        "date": "2021-11-10T00:00:00.000Z",
                        "reviewer_name": "BananaBoy123",
                        "helpfulness": 1,
                        "photos": []
                    },
                    {
                        "review_id": 841390,
                        "rating": 2,
                        "summary": "Wow camo onesie is comfy",
                        "recommend": true,
                        "response": null,
                        "body": "You can wear this anywhere.. best thing to wear during grocery shopping.",
                        "date": "2021-09-22T00:00:00.000Z",
                        "reviewer_name": "onesielover123",
                        "helpfulness": 1,
                        "photos": []
                    },
                    {
                        "review_id": 841380,
                        "rating": 3,
                        "summary": "Wowie",
                        "recommend": true,
                        "response": null,
                        "body": "This onesie is incredible! It's very loose, but the opposite of tight on this form is \"long\", so not sure what's going on there. ",
                        "date": "2021-09-22T00:00:00.000Z",
                        "reviewer_name": "woohoo",
                        "helpfulness": 1,
                        "photos": []
                    }
                ]
            }

            ]))
        }),
    )

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    const sampleProduct = { productId: '42366' }

    test('Should render reviews for product 42366', async () => {
        render(<ReviewsList productId={sampleProduct} />)

        const ancestor = await screen.getByTestId('rev-test')
        const reviews = await screen.findAllByTestId('rev-tile-test')

        expect(reviews).toBeInTheDocument;
    })
})