import React, { useContext } from "react";
import UserContext from "./Context";

function Profile() {
    let user = useContext(UserContext);
  return (
    <div>
      <h1>hello this is {user}</h1>
    </div>
  );
}

export default Profile;