import RenderRouter from "./routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <RenderRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
