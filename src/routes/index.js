import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PostPage from "../pages/PostPage";
import AddPage from "../pages/AddPage";
import NotfoundPage from "../pages/NotfoundPage";
import LoginPage from "../pages/auth/LoginPage";
import AuthGuard from "../components/auth/guards/AuthGuard";

export const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<AuthGuard component={Homepage} />} />
      <Route
        path="/apartments/:id"
        element={<AuthGuard component={PostPage} />}
      />
      <Route
        path="/apartments/create"
        element={<AuthGuard component={AddPage} />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  </>
);
