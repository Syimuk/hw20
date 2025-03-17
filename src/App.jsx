import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginPage from "./pages/LoginPage";
import TodosPage from "./pages/TodoPage";

export default function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/todos"
          element={isAuthenticated ? <TodosPage /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
