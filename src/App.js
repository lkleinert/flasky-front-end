import "./App.css";
import CatList from "./components/CatList";

//place holder for future API call data
const catData = [
  {
    name: "Whiskers",
    chipNumber: "13579",
  },

  {
    name: "Fang",
    chipNumber: "82672",
  },
  {
    name: "Beetle",
    chipNumber: "02468",
  },
  {
    name: "Loki",
    chipNumber: "12345",
  },
];

function App() {
  return (
    <main>
      <h1>The Cat Corral</h1>
      <CatList cats={catData}></CatList>
    </main>
  );
}

export default App;
