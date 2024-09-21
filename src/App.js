import "./App.css";
import Layout from "./shared/layout";
import Homepage from "./pages/home";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <Layout />
      <Homepage />
    </div>
  );
}

export default App;
