import React, { FC } from "react";
import "./listUser.css";

const ListUser: FC<User> = ({ username, age }) => {
  return (
    <li className="list-user__card">
      <div className="list__user">
        {username} {`(${age} years old)`}
      </div>
    </li>
  );
};

export default ListUser;
