import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';

// Write up the two tests here and make sure they are testing what the title shows

test('form header renders', () => {
	render(<CheckoutForm />);
	const formHeader = screen.getByText(/checkout form/i);
	expect(formHeader).toBeTruthy();
});

test('form shows success message on submit with form details', () => {
	render(<CheckoutForm />);

	const firstNameInput = screen.getByLabelText(/first name/i);
	const lastNameInput = screen.getByLabelText(/last name/i);
	const addressInput = screen.getByLabelText(/address/i);
	const cityInput = screen.getByLabelText(/city/i);
	const stateInput = screen.getByLabelText(/state/i);
	const zipInput = screen.getByLabelText(/zip/i);
	const checkoutBtn = screen.getByRole('button');

	fireEvent.change(firstNameInput, {
		target: { value: 'Jake', name: 'firstName' },
	});
	fireEvent.change(lastNameInput, {
		target: { value: 'Grella', name: 'lastName' },
	});
	fireEvent.change(addressInput, {
		target: { value: '9441 Readcrest Dr', name: 'address' },
	});
	fireEvent.change(cityInput, {
		target: { value: 'Beverly Hills', name: 'city' },
	});
	fireEvent.change(stateInput, {
		target: { value: 'CA', name: 'state' },
	});
	fireEvent.change(zipInput, {
		target: { value: '90210', name: 'zip' },
	});
	fireEvent.click(checkoutBtn);

	const successMsg = screen.getByTestId('successMessage');
	expect(successMsg).toBeTruthy();
});
