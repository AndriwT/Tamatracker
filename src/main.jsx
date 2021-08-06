import React from "react";
import { useHistory } from "react-router-dom";
import ProfileButton from "./ProfileButton";

const Main = () => {
  return (
    <div>
      <ProfileButton path="/profile" />
      <h1>Main Page</h1>
    </div>
  );
};

export default Main;
