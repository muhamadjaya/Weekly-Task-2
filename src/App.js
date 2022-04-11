import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GitPage from "./page/GitPage";
import UiuxPage from "./page/UiuxPage";
import FigmaPage from "./page/FigmaPage";
import HtmlPage from "./page/HtmlPage";
import CssPage from "./page/CssPage";
import BootstrapPage from "./page/BootstrapPage";
import JavascriptPage from "./page/JavascriptPage";
import CleancodePage from "./page/CleancodePage";

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
