import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.tsx";
import "./App.css";
import "./index.css";
import Learn from "./pages/Learn.tsx";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Learn />} path="/learn" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
