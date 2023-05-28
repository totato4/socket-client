import React from "react";
import { Routes, Route } from "react-router-dom";

import Chat from "./Chat";
// @ts-expect-error
import Main from "./Main";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/chat" element={<Chat />} />
  </Routes>
);

export default AppRoutes;
