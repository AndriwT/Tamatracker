import React from "react";
import { useHistory } from "react-router-dom";

function ProfileButton({ path }) {
  let history = useHistory();

  function handleClick() {
    history.push(`${path}`);
  }

  return (
    <button type="button" onClick={handleClick}>
      Go to Profile
    </button>
  );
}

export default ProfileButton;
