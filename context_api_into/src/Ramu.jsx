import React, { useContext } from "react";
import UserContext from "./component/Context";

function Ramu() {
    let user = useContext(UserContext);
  return (
    <div>
      <h1>hello this is Ramu</h1>
      <p>{user}</p>
    </div>
  );
}

export default Ramu;