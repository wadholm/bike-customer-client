import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Toolbar from "./components/toolbar/toolbar";
import Home from "./pages/home";
// import Update from "./pages/update";
// import About from "./pages/about";
// import Texts from "./pages/texts";
// import Auth from "./pages/auth";
// import Invite from "./pages/invite";

import { AuthContext } from "./context/authcontext";
import { useAuth } from "./hooks/authhook";

const App = () => {
  const { token, login, logout, userId, userEmail } = useAuth();
  // const [texts, setTexts] = useState([]);
  // const [textsError, setTextsError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      // try {
      //   const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
      //     method: "GET",
      //     headers: {
      //       Authorization: "Bearer " + token,
      //     },
      //   });
      //   const data = await response.json();
      //   if (!response.ok) {
      //     throw new Error(data.message);
      //   }
      //   setTexts(data);
      // } catch (error) {
      //   setTextsError(error.message);
      // }
    };
    if (token) {
      fetchData();
    }
  }, [token]);

  const authorizedRoutes = (
    <Switch>
      <Route
        exact
        path="/"
        render={(props) => (
          <Home
          // texts={texts}
          // textsError={textsError}
          // setTextsError={setTextsError}
          // setTexts={setTexts}
          />
        )}
      />
      <Redirect to="/" />
    </Switch>
  );

  const unauthorizedRoutes = (
    <Switch>
      <Route path="/" exact component={Auth} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <div className="App container pb-5">
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          userEmail: userEmail,
          login: login,
          logout: logout,
        }}
      >
        <Router>
          <Toolbar />
          {token ? authorizedRoutes : unauthorizedRoutes}
        </Router>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
