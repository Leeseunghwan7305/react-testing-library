import { getAllByRole, render, screen } from "@testing-library/react";
import UserList from "./UserList";

test("user이 있는지 없는지 확인", () => {
  render(<UserList users={["kim", "jin"]} />);
  const Users = screen.getAllByRole("listitem");
  expect(Users).toHaveLength(Users.length);
});

//getBy 쿼리로 찾을떄 아예 그 요소가 없다면 실패하게된다.
//findBy는 async로 동작한다.
//queryBy는 없는 요소를 판별할 수 있다.
//promise를 반환하는 findBy
