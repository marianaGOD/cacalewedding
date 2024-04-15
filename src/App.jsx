import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TopBar from "./Components/TopBar";
import Form from "./Components/Form";
import StoryPage from "./Pages/StoryPage";
import BidDay from "./Pages/BigDay";
import KnowMore from "./Pages/KnowMore";

import { useEffect, useState, useRef } from "react";

import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const location = useLocation();
  const routeContainerRef = useRef(null);
  const [topBarHeight, setTopBarHeight] = useState(0);
  const [navBarHeight, setNavBarHeight] = useState(0);

  useEffect(() => {
    // Calculamos a altura da TopBar para puxar as outras coisas para baixo
    const topBarElement = document.getElementById("mainNavigation");
    const navBarElement = document.getElementById("navbarNavDropdown");
    if (topBarElement && navBarElement) {
      setTopBarHeight(topBarElement.offsetHeight);
      setNavBarHeight(navBarElement.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (location.pathname === "/") {
      document.body.classList.remove("paper-bg");
    } else {
      document.body.classList.add("paper-bg");
    }
    console.log(routeContainerRef);
    if (routeContainerRef.current) {
      routeContainerRef.current.scrollTop = 0; // Reset scroll to the top of the div
    }
  }, [location]);

  return (
    <>
      <div className="app-wrapper">
        <TopBar />
        <div
          ref={routeContainerRef}
          className="route-container"
          style={{
            marginTop: `${topBarHeight + navBarHeight + 32}px`,
            maxHeight: `calc(100vh - ${topBarHeight}px - 82px)`,
            overflow: "auto",
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<Form />} />
            <Route path="/historia" element={<StoryPage />} />
            <Route path="/dia" element={<BidDay />} />
            <Route path="/mais" element={<KnowMore />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
