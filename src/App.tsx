import React from 'react';
import './App.css';
import {AuthProvider} from "./components/auth/AuthContext";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PaymentCard from "./pages/PaymentCard";
import Login from "./pages/Login";
import RequireAuth from "./components/auth/RequireAuth";
import MainPage from "./components/MainPage";

function App() {

  return (

      <AuthProvider>
        <React.Fragment>
          <BrowserRouter>
            <Routes>
              <Route path="/paul" element={<PaymentCard />} />
              <Route path="/" element={<Login />} />
              <Route path="*" element={
                <RequireAuth>
                  <MainPage />
                </RequireAuth>
              } />
            </Routes>
          </BrowserRouter>
        </React.Fragment>
      </AuthProvider>
  );

}

export default App;
