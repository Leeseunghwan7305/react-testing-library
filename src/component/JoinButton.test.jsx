import { render, screen } from "@testing-library/react";
import JoinButton from "./JoinButton";

test("19세 이하면 버튼을 클릭할 수 없다. 안내문구는 빨간색이다.", () => {
  render(<JoinButton age={10} />);
  const btnEl = screen.getByRole("button"); //screen에 button
  const txtEl = screen.getByRole("heading"); // screen에 heading
  expect(btnEl).toBeInTheDocument(); // document안에 있는지
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled(); //disabled가 됐는지
  expect(txtEl).toHaveStyle({
    //스타일의 color 가 red인지
    color: "red",
  });
});

test("성인이면 버튼을 클릭할 수 있다. 안내문구는 하얀색이다", () => {
  render(<JoinButton age={20}></JoinButton>);
  const btnEl = screen.getByRole("button");
  const txtEl = screen.getByRole("heading");
  expect(btnEl).toBeInTheDocument();
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).not.toBeDisabled(); // disabled가 아니면 참
  expect(txtEl).toHaveStyle({
    color: "white",
  });
});
