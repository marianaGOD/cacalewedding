import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import TopBar from "./Components/TopBar";
import Form from "./Components/Form";
import StoryPage from "./Pages/StoryPage";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/historia" element={<StoryPage />} />
      </Routes>
    </>
  );
}

export default App;
