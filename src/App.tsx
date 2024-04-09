import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { NavBar } from "./components/Navbar/NavBar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { Header } from "./components/Header";

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/domov" element={<Home />} />
          <Route path="/galeria" element={<Gallery />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;