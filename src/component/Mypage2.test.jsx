import { getByText, screen, render } from "@testing-library/react";
import Mypage2 from "./Mypage2";

test("제목이 있다.", () => {
  render(<Mypage2 />);
  //   const txtEl = screen.getByRole("heading", {
  //     level: 1,
  //   });
  //   expect(txtEl).toBeInTheDocument();
  const inputEl = screen.getByLabelText("자기소개");
  expect(inputEl).toBeInTheDocument();
});

//getByRole
//getByLabelText
//getByPlaceholderText
//getByText
//getByDisplayValue
//getByAltText
//getByTitle
//getByTestId
