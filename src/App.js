import './App.css';
import Header from './components/Header.tsx';
import AboutSection from './components/AboutSection.js';
import AboutInfoSection from './components/AboutInfoSection.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutSection text = "Welcome to the portfolio website of Tavish Sharma."/>
      <AboutInfoSection />
    </div>
    
  );
}

export default App;
