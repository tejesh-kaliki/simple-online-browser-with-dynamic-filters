import "./App.css";
import Dashboard from "./Dashboard";
import Header from "./Header";

function App() {
  return (
    <div className="App" style={{ paddingTop: "100px" }}>
      <main>
        <Header />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
