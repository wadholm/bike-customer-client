import React, { useState, useEffect } from "react";
import City from "../components/city/city";
import Payment from "../components/payment/payment";
import Travels from "../components/travels/travels";
import { Button } from "reactstrap";

const Home = (props) => {
  const uId = "619f6ee3d0b6c914a2b58514";

  // const uId = props.user._id;
  console.log(props.user);
  console.log("render home");

  const [user, setUser] = useState();
  const [userError, setUserError] = useState(null);

  
  const logoutWithGoogle = () => {
    // ev.preventDefault();
    window.open("http://localhost:1337/auth/logout", "_self");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BACKEND_URL}/users/${uId}`,
          {
            method: "GET",
            // headers: {
            //   Authorization: "Bearer " + token,
            // },
          }
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }

        setUser(props.user);
      } catch (error) {
        setUserError(error.message);
      }
    };
    fetchData();
  }, [props.user]);

  return (
    <>
      {user && (
        <>
          <Button onClick={logoutWithGoogle}>Logga ut</Button>
          <Travels userId={user._id} />
          <Payment user={user} setUser={setUser} />
          <City userId={uId} />
        </>
      )}
    </>
  );
};

export default Home;
