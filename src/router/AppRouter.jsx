import React from "react";
import LoginPage from "../pages/LoginPage";
import { Navigate, Route } from "react-router";
import TodosPage from "../pages/TodosPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<h1></h1>}>
      <Route index element={<Navigate to="login" />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="todo" element={<TodosPage />} />
      </Route>
    </Routes>
  );
}
