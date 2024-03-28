import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TopBar from "./Components/TopBar";
import Form from "./Components/Form";
import StoryPage from "./Pages/StoryPage";
import BidDay from "./Pages/BigDay";
import { useEffect, useState } from "react";

function App() {
  const [topBarHeight, setTopBarHeight] = useState(0);

  useEffect(() => {
    // Calculamos a altura da TopBar para puxar as outras coisas para baixo
    const topBarElement = document.getElementById("mainNavigation");
    if (topBarElement) {
      setTopBarHeight(topBarElement.offsetHeight);
    }
  }, []);
  return (
    <>
      <TopBar />
      <div style={{ paddingTop: `${topBarHeight}px` }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<Form />} />
          <Route path="/historia" element={<StoryPage />} />
          <Route path="/dia" element={<BidDay />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
