import "./App.css";
import { Routes, Route, HashRouter, Navigate } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import NoMatch from "./components/pages/NoMatch";
import ResultsPage from "./components/pages/ResultsPage";
import ContactPage from "./components/pages/ContactPage";
import CopyrightPage from "./components/pages/CopyrightPage";
import PrivacyPage from "./components/pages/PrivacyPage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route index path="/home" element={<HomePage></HomePage>}></Route>
            <Route path="/about" element={<AboutPage></AboutPage>}></Route>
            <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
            <Route path="/copyright" element={<CopyrightPage></CopyrightPage>}></Route>
            <Route path="/privacy" element={<PrivacyPage></PrivacyPage>}></Route>
            <Route
              path="/results"
              element={<ResultsPage></ResultsPage>}
            ></Route>
            <Route path="*" element={<NoMatch></NoMatch>}></Route>
          </Routes>
        </HashRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
