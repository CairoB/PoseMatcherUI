import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/pages/HomePage'
import AboutPage from './components/pages/AboutPage'
import ContactPage from './components/pages/ContactPage'
import NoMatch from './components/pages/NoMatch'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}>
        <Route index element={<HomePage></HomePage>}></Route>
        <Route path="about" element={<AboutPage></AboutPage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Route>
    </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
