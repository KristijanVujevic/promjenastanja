import "./App.css";
import Eventi from "./Components/eventi";
import KlasPromjenaState from "./Components/klasPromjenaState";
import Counter from "./Components/counter";
import UnosTeksta from "./Components/unosTeksta";
import Checkbox from "./Components/checkbox";
import Forma from "./Components/forma";
import Counter2 from "./Components/counter2";
import Statefull from "./Components/statefull";
function App() {
  return (
    <div className="App">
      <Eventi />
      <hr />
      <KlasPromjenaState />
      <hr />
      <Counter />
      <hr />
      <UnosTeksta />
      <hr />
      <Checkbox />
      <hr />
      <Forma />
      <hr />
      <Counter2 />
      <hr />

      <hr />
      <Statefull />
    </div>
  );
}

export default App;
