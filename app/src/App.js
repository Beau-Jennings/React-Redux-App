import './App.css';

import Chars from "./components/CharCard";
function App() {

  
  return (
    <div className = "App">
      <div className = "Header">
        <h1>Rick & Morty List</h1>
      </div>
      <div className="Characters">
        <div className="Cards">
          <Chars />
        </div>
      </div>
    </div>
  )
}

export default App;
