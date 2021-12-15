import React, { useState, useEffect } from "react";
import { Button } from "reactstrap";

const Auth = (props) => {
  const { loginWithPopup, logout, user, isAuthenticated } = props;

  return (
    <div>
      <Button onClick={loginWithPopup}>Authentisera</Button>
    </div>
  );
};

export default Auth;
