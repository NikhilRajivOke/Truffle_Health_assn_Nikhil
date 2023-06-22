import "./App.css";
import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import FormComponent from "./components/FormComponent";
import Summary from "./components/Summary";
import Home from "./components/Home";
import Dash from "./components/Dash";

function App() {
  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Dash></Dash>}/>
            <Route path="form" element={<FormComponent/>} />
            <Route path="summary" element={<Summary isEditable={true}/>} />
          </Route>
        </Routes>
      </Routers>
    </>
  );
}

export default App;
