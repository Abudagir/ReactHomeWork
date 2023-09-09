import "./App.css";
import Button from "./components/Button/Button";

function App() {
  const onSave = () => console.log("Save");

  return (
    <div>
      <div className="App">Hello World</div>
      <Button text="Save" handleClick={onSave}></Button>
    </div>
  );
}

export default App;
