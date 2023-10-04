const fs = require("fs");
const path = require("path");
import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { render, screen } from "@testing-library/react";
import WelcomeBack from "../WelcomeBack";

Enzyme.configure({ adapter: new Adapter() });

describe("Test WelcomeBack.js", () => {
  let wrapper;
  let divWrapper;
  let h1Wrapper;
  let h4Wrapper;
  let h5Wrapper;

  test("renders the default value without a name prop", () => {
    render(<WelcomeBack />);
    const text = screen.getByText(/Welcome back/i);
    expect(text).toBeInTheDocument;
  });

  test("renders the customer name passed as a prop", () => {
    render(<WelcomeBack name="John" />);
    const text = screen.getByText("Welcome back, John!");
    expect(text).toBeInTheDocument;
  });
});
