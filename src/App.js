//Main App to index.js
import './App.css';
import LayoutComponent from "./layout.js"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LayoutComponent/>
      </header>
    </div>
  );
}

export default App;
