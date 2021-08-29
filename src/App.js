import React, { useEffect, useState } from "react";
import AppRouter from "./Components/AppRouter";
import { AuthContext } from "./context/index";

import "./App.css";
import SignIn from "./pages/SignIn.jsx";
import Container from "@material-ui/core/Container";
import { BrowserRouter } from "react-router-dom";

const [isAuth, setIsAuth] = useState(false);
const [isLoading, setLoading] = useState(true);

useEffect(() => {
  if (localStorage.getItem("auth")) {
    setIsAuth(true);
  }
  setLoading(false);
}, []);

function App() {
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
        isLoading,
      }}
    >
      <BrowserRouter>
        <Container component="main" maxWidth="xl">
          <div className="App">
            <SignIn />
          </div>
        </Container>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
