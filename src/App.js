import logo from './logo.svg';
import './App.css';
import Market from "./components/Market"
import Feature from './components/Feature';
import Sponsers from './components/Sponsers';

function App() {
  return (
    <div className="App">
      <Market />
      <Feature/>
      <Sponsers/>
    </div>
  );
}

export default App;
