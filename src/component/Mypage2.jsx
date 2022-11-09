import React from "react";

const Mypage2 = () => {
  return (
    <div>
      <div>
        <label htmlFor="username">이름</label>
        <input type={"text"} id="username" />
      </div>
      <div>
        <label id="my-div" htmlFor="profile">
          자기소개
        </label>
        <textarea id="profile" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
};

export default Mypage2;
