import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { AboutMy } from "./pages/AboutMy";
import { References } from "./pages/References";
import { Voucher } from "./pages/Voucher";

function App() {
  const location = useLocation();
  const [isPageLoaded, setIsPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setIsPageLoaded(!isPageLoaded);
  }, []);

  return (
    <>
      <Nav />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ x: 10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/domov" element={<Home />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/o mne" element={<AboutMy />} />
            <Route path="/referencie" element={<References />} />
            <Route path="/voucher" element={<Voucher />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
