import HomePage from "./pages/HomePage";
import GlobalStyles from "./styles/GlobalStyles";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LogInPage from "./pages/LogInPage";
import SignInPage from "./pages/SignInPage";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (credentials) => {
    try {
      const response = await fetch("http://localhost:8080/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        console.log("Login successful:", data);
        return true;
      } else {
        // Log error if login fails, without trying to parse JSON
        console.error("Login failed:", response.statusText);
        return false;
      }
    } catch (error) {
      // Catch network or parsing errors
      console.error("Login error:", error);
      return false;
    }
  };

  const handleSignUp = async (userData) => {
    try {
      const response = await fetch("http://localhost:8080/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(true);
        console.log("Signup successful:", data);
        return true;
      } else {
        // Log error if signup fails, without trying to parse JSON
        console.error("Signup failed:", response.statusText);
        return false;
      }
    } catch (error) {
      // Catch network or parsing errors
      console.error("Signup error:", error);
      return false;
    }
  };

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <LogInPage onLogin={handleLogin} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <SignInPage onSignUp={handleSignUp} />
            )
          }
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <HomePage /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
