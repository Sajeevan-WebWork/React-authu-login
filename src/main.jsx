import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import DemoPage from "./components/DemoPage";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { Toaster } from "react-hot-toast";
import ForgotPassword from "./components/ForgotPassword";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster />
    <Router>
      <Routes>

        <Route path='/' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path='/signup' element={
          <PublicRoute>
            <Signup />
          </PublicRoute>
        } />

        <Route path='/login' element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />

        <Route path='/forgot-password' element={
          <PublicRoute>
            <ForgotPassword />
          </PublicRoute>
        } />

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  </StrictMode>
);
