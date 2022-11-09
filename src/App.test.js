import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("로고 이미지가 잘 나온다.", () => {
  render(<App />);
  const logoEl = screen.getByAltText("logo"); //이미지의 alt text로 가지고 오는것
  expect(logoEl).toBeInTheDocument(); // 로고가 document에 있는지?
});
