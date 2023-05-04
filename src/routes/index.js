import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage";
import PostPage from "../pages/PostPage";
import AddPage from "../pages/AddPage";
import NotfoundPage from "../pages/NotfoundPage";

export const Router = () => (
  <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="api/apartment-list/:id" element={<PostPage />} />
      <Route path="addPost" element={<AddPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Routes>
  </>
);
