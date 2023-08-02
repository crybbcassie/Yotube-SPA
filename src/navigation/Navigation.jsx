import { Routes, Route } from "react-router-dom";
import { LogIn, SignUp, Main } from "../pages/index";
import { useState } from "react";

export default function Navigation() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [currName, setCurrName] = useState("login");

  function toggleForm(currName) {
    setCurrName(currName);
  }

   const updateToken = (newToken) => {
     setToken(newToken);
   };

  return (
    <Routes>
      {token ? (
        <Route path="youtube-spa/main" element={<Main />} />
      ) : (
        <>
          <Route
            path="/youtube-spa/login"
            element={
              <LogIn onFormSwitch={toggleForm} updateToken={updateToken} />
            }
          />
          <Route
            path="/youtube-spa/signup"
            element={<SignUp onFormSwitch={toggleForm} />}
          />
        </>
      )}
    </Routes>
  );
}
