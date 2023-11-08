import "./App.css";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import NoMatch from "./components/pages/NoMatch";
import ResultsPage from "./components/pages/ResultsPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route index path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="/results" element={<ResultsPage></ResultsPage>}></Route>
          <Route path="*" element={<NoMatch></NoMatch>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
