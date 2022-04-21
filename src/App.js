import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitPage from "./pages/GitPage";
import UiuxPage from "./pages/UiuxPage";
import FigmaPage from "./pages/FigmaPage";
import HtmlPage from "./pages/HtmlPage";
import CssPage from "./pages/CssPage";
import BootstrapPage from "./pages/BootstrapPage";
import JavascriptPage from "./pages/JavascriptPage";
import CleancodePage from "./pages/CleancodePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<GitPage />} />
          <Route path="/uiux" element={<UiuxPage />} />
          <Route path="/figma" element={<FigmaPage />} />
          <Route path="/html" element={<HtmlPage />} />
          <Route path="/css" element={<CssPage />} />
          <Route path="/bootstrap" element={<BootstrapPage />} />
          <Route path="/javascript" element={<JavascriptPage />} />
          <Route path="/cleancode" element={<CleancodePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
