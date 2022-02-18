import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Error } from './Pages/Error';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Edit } from './Pages/Edit';
import Preview from './Pages/Preview';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/edit" element={<Edit />} ></Route>
          <Route exact path="/prev" element={<Preview />} ></Route>
          <Route exact path="*" element={<Error />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
