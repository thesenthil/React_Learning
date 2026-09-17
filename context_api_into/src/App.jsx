import React from "react";
import UserContext from "./component/Context";
import Profile from "./component/Profile";
import Ramu from "./Ramu";

function App() {
  const user = "Senthil";

  return (
    <>
      <UserContext.Provider value={user}>
        <Profile />
        <Ramu />
      </UserContext.Provider>
    </>
  );
}

export default App;