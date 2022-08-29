import Header from "./components/Header";
import MapView from "./components/MapView";


function App() {
  return (
    <div className="App">
      <Header username='Mehdi'/>
      <MapView plan='./images/plan.png'/>
    </div>
  );
}

export default App;
