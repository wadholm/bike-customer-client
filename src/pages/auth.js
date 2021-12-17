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

//   (async () => {
//     const request = await fetch("http://localhost:1337/auth/login/success", {
//       method: "GET",
//       credentials: "include",
//       headers: {
//        Accept: "application/json",
//         "Content-Type": "application/json",
//        "Access-Control-Allow-Credentials": true,
//     },
//   });

//   const res = await request.json();
//    //In my case I stored user object in redux store
//    if(request.status === 200){
//      //Set User in Store
//       console.log(res);
//       console.log(request);
//   }

// })();

  // const login = async () => {
  //   try {
  //     const response = await fetch(
  //       `${process.env.REACT_APP_BACKEND_URL}/auth/google`,
  //       {
  //         method: "GET",
  //         // mode: "no-cors", // no-cors, *cors, same-origin

  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //           // Authorization: "Bearer " + context.token,
  //         },
  //         // body: JSON.stringify({}),
  //       }
  //     );
  //     console.log(response);
  //     const data = await response.json();
  //     if (!response.ok) {
  //       throw new Error(data.message);
  //     }
  //     console.log(data);
  //     setSuccess(true);
  //     setLoading(false);
  //   } catch (err) {
  //     setError(err.message);
  //     setLoading(false);
  //   }
  // };

const loginWithGoogle = () => {
  // ev.preventDefault();
  window.open("http://localhost:1337/auth/google", "_self");
}

const logoutWithGoogle = () => {
  // ev.preventDefault();
  window.open("http://localhost:1337/auth/logout", "_self");
}

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
      <Button onClick={loginWithGoogle}>Logga in</Button>
      <Button onClick={logoutWithGoogle}>Logga ut</Button>
    </div>
  );
};

export default Auth;
