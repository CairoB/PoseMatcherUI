import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import NoMatch from "./components/pages/NoMatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route index path="/home" element={<HomePage></HomePage>}></Route>
          <Route path="/about" element={<AboutPage></AboutPage>}></Route>
          <Route path="*" element={<NoMatch></NoMatch>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
