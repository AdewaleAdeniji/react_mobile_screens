import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Success from "./pages/success";
import ErrorScreen from "./pages/error";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Success />} />
      <Route path="/error" element={<ErrorScreen />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
