import { render, screen } from "@testing-library/react";
import MyPage from "./MyPage";

test("유저가 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage />); //MyPage를 가져와서
  const txtEl = screen.getByText(/로그인을 해주세요/); //텍스트로 가지고 오는 것 텍스트를 이용해 찾는것    일부 문자만 보고 찾는건 불가능하니까  정규표현식이나 전체문장을 쓰자
  const btnEl = screen.getByRole("button"); //html 요소를 가져오는 것
  /* 
  h1 ~ h6 : heading
  button : button
  a : link
  checkbox : checkbox
  radio : radio
  select : combobox
  */
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});

test("유저가 있으면 환영 문구를 보여준다.", () => {
  render(<MyPage user={{ name: "KIM" }} />); //MyPage를 가져와서
  const txtEl = screen.getByText(/KIM님 환영합니다/);
  expect(txtEl).toBeInTheDocument();
});

test("유저가 name이 없으면 로그인 문구와 버튼을 보여준다.", () => {
  render(<MyPage user="Park" />);

  const txtEl = screen.getByText(/로그인을 해주세요/);
  const btnEl = screen.getByRole("button");
  expect(txtEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent("로그인");
});
