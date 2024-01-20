import './App.css';
import Header from './components/Header.tsx';
import AboutSection from './components/AboutSection.js';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection text = "Welcome to the portfolio website of Tavish Sharma."/>
    </div>
  );
}

export default App;
