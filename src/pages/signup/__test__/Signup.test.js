import { render, screen, fireEvent } from '@testing-library/react';
import Signup from '../Signup'
import { AuthContextProvider } from '../../../context/AuthContext'

const MockSignup = () => {
    return (
        <AuthContextProvider>
            <Signup />
        </AuthContextProvider>
    )
}

describe("Signup form functionality", () => {
    it('should render one of the input elements (all inputs are the same)', async() =>{
        render(
            <MockSignup />
        );
        const inputE = screen.getByLabelText('Email')
        expect(inputE).toBeInTheDocument();
    });

    it("should render one of input elements value (all inputs are the same)", () => {
        render(
            <MockSignup />
        );
        const inputE = screen.getByLabelText('Display Name')
        fireEvent.change(inputE, { target: { value: 'some data' } })
        expect(inputE.value).toBe('some data')
    });
})
