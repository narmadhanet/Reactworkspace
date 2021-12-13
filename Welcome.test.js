import react from "react";
import ReactDOM from "react-dom";
import Welcome from "../Welcome";
import { render, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import renderer from "react-test-renderer";
it.skip("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Welcome></Welcome>, div);
});

it("renders h1 correctly", () => {
  const { getByTestId } = render(<Welcome name="Shivyaa"></Welcome>);
  expect(getByTestId("welcome")).toHaveTextContent("Welcome Shivyaa");
});

it("matches snapshot", () => {
  const element = renderer.create(<Welcome name="priya"></Welcome>).toJSON();
  expect(element).toMatchSnapshot();
});
it("hello welcome correctly", () => {
  const { getByTestId } = render(<Welcome name="Shivyaa"></Welcome>);
  expect(getByTestId("welcome")).toHaveTextContent("Welcome Shivyaa");
});
