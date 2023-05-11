import "./App.css";
import { Header } from "./components/Header";
import { Routes } from "./navigation/Routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
