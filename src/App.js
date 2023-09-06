import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <div className="App">Hello World</div>
      <Button color="#007bff" label="Синя кнопка"></Button>
      <Button color="#e91e63" label="Рожева кнопка"></Button>
      <Button color="#4caf50" label="Зелена кнопка"></Button>
      <Button color="#ff9800" label="Помаранчева кнопка"></Button>
      <Button color="#9c27b0" label="Фіолетова кнопка"></Button>
    </div>
  );
}

export default App;
