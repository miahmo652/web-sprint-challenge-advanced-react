import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm />)
    const firstname = screen.getByTestId('first-name')
    fireEvent.change(firstname, {target: {value:"Mo"}})

    const submit = screen.getByTestId('button')
    fireEvent.click(submit);

    const msg = screen.getByTestId('successMessage')
});


test("failed test run", ()=>{
    render(<CheckoutForm />)

    const msg = screen.getByTestId('successMessage')
})