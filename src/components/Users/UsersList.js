import React from "react";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  return (
    <ul>
      {props.users.map((user) => (
        <li>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default UsersList;
