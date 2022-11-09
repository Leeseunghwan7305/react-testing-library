import React from "react";

const UserList = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return <li key={user}>{user}</li>;
      })}
    </div>
  );
};

export default UserList;
