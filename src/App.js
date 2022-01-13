import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Error } from './Pages/Error';
import {About} from './Pages/About';
import Help from './Pages/Help';
import Templates from './Pages/Templates';
import Edit from './Pages/Edit';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/templates" element={<Templates />} ></Route>
          <Route exact path="/help" element={<Help />} ></Route>
          <Route exact path="/about" element={<About />} ></Route>
          <Route exact path="/edit" element={<Edit />} ></Route>
          <Route element={<Error />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
