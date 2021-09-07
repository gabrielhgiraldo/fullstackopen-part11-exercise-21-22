import React from 'react'
import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'

import PersonForm from '../../components/PersonForm'


describe('<PersonForm/>', () => {
    it('renders inputs', () => {
        render(<PersonForm/>)
        const inputs = screen.getAllByRole('textbox')
        expect(inputs.length).toEqual(2)
    })
    it('handles name and number changes and submits with correct values on press', () => {
        const onNameChange = jest.fn()
        const onNumberChange = jest.fn()
        const addNewPerson = jest.fn((event) => event.preventDefault())

        render(<PersonForm 
            handleNameChange={onNameChange}
            handleNumberChange={onNumberChange}
            addNewPerson={addNewPerson}
        />)

        const nameInput = screen.getAllByRole('textbox')[0]
        const numberInput = screen.getAllByRole('textbox')[1]
        const submitButton = screen.getByRole('button')

        fireEvent.change(nameInput, {
            target: {
                value: 'bob belcher'
            }
        })
        fireEvent.change(numberInput, {
            target: {
                value: '123-232-3213'
            }
        })
        fireEvent.click(submitButton)

        expect(onNameChange.mock.calls.length).toEqual(1)
        expect(onNumberChange.mock.calls.length).toEqual(1)
        expect(addNewPerson.mock.calls.length).toEqual(1)
    })
})