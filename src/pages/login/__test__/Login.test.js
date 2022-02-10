import { render, screen, fireEvent } from '@testing-library/react';
import Login from '../Login'
import { AuthContextProvider } from '../../../context/AuthContext'
import { ThemeProvider } from '../../../context/ThemeContext';
import { BrowserRouter } from 'react-router-dom';

const MockLogin = () => {
    return (
        <AuthContextProvider>
        <ThemeProvider>
        <BrowserRouter>
            <Login />
        </BrowserRouter>
        </ThemeProvider>
        </AuthContextProvider>
    )
}

describe("Login form functionality", () => {
    it('should render one of the input elements (all inputs are the same)', async() =>{
        render(
            <MockLogin />
        );
        const inputE = screen.getByLabelText('Email')
        expect(inputE).toBeInTheDocument();
    });

    it("should render one of input elements value (all inputs are the same)", () => {
        render(
            <MockLogin />
        );
        const inputE = screen.getByLabelText('Password')
        fireEvent.change(inputE, { target: { value: 'some data' } })
        expect(inputE.value).toBe('some data')
    });
})