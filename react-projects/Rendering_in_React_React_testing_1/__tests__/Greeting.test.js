import React from "react";
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect';

import Greeting from "../src/Greeting";

describe("Test Greeting.js", () => {
  test("renders name and greeting props correctly", () => {
    const props = {
      name: "Bob",
      greeting: "yo"
    };
    render(<Greeting props={props}/>);
    const greeting = screen.getByText(/Hello and/i);
    expect(greeting).toBeInTheDocument();
  });
});
