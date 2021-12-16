import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { Button } from "reactstrap";

const Auth = (props) => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const [success, setSuccess] = useState();

  // const responseGoogleSuccess = (response) => {
  //   console.log(response);
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_BACKEND_URL}/users/${props.userId}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           Authorization: "Bearer " + context.token,
  //         },
  //         body: JSON.stringify({}),
  //       }
  //     );
  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message);
  //     }
  //     setSuccess(true);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };
  // const responseGoogleError = (response) => {
  //   console.log(response);
  // };
  // console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

  const login = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/auth/google`,
        {
          method: "GET",
          // mode: "no-cors", // no-cors, *cors, same-origin

          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            // Authorization: "Bearer " + context.token,
          },
          // body: JSON.stringify({}),
        }
      );
      console.log(response);
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
      console.log(data);
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  return (
    <div>
      {/* <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logga in"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleError}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      /> */}
      <Button onClick={login}>Logga in</Button>
    </div>
  );
};

export default Auth;
