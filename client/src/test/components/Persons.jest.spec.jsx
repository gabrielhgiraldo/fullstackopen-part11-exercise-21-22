import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Persons from '../../components/Persons'

const persons = [
    {
        name: 'bob belcher',
        number: "123-323-2321"
    },
    {
        name: 'linda belcher',
        number: '123-232-3232'
    }
];

describe('<Persons/>', () => {
    it('should render items', () => {
        render(
            <Persons personsToShow={persons}/>
        )
        expect(screen.getByText('bob belcher 123-323-2321')).toBeVisible()
        expect(screen.getByText('linda belcher 123-232-3232')).toBeVisible()
    })
})