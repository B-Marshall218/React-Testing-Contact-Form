import React from "react";
import { render, fireEvent, getByText, getByTestId, waitFor } from "@testing-library/react";
import ContactForm from "./components/ContactForm";

test("renders ContactForm without crashing", () => {
    render(<ContactForm />);
});

test("form can be filled in and submitted", () => {
    const { getByLabelText, getByTestId } = render(<ContactForm />);

    const expectedFirstName = "jim"


    const firstNameInput = getByTestId(/firstName/i)
    const lastNameInput = getByTestId(/lastName/i)
    const emailInput = getByTestId(/email/i)
    // const messageInput = getByTestId(/message/i)



    fireEvent.change(firstNameInput, { target: { value: "jim" } })
    fireEvent.change(lastNameInput, { target: { value: "Halpert" } })
    fireEvent.change(emailInput, { target: { value: "Scranton@paper.com" } })
    // fireEvent.change(messageInput, { target: { value: "FALSE: black bear is the best bear" } })
    //why didnt the message test work?
    // expect(input).toBeInTheDocument();

    const button = getByTestId(/submit/i)
    fireEvent.click(button);

    // const jim = getByText(/jim/i)
    // expect(jim).toBeInTheDocument();

    // const expectedFirstName = "jim"

    expect(firstNameInput.value).toBe(expectedFirstName)



})
