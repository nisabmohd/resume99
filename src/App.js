import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import { Error } from './Pages/Error';
import LoadingBar from 'react-top-loading-bar';
import { useEffect, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Edit } from './Pages/Edit';
import Preview from './Pages/Preview';
import Select from './Pages/Select';
function App() {
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    setProgress(60)
    setProgress(95)
    setProgress(100)
  },[])
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
        <LoadingBar
        color='rgb(25,118,210)'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      
        <Routes>
          <Route exact path="/" element={<Home set={setProgress} />} ></Route>
          <Route exact path="/edit" element={<Edit set={setProgress} />} ></Route>
          <Route exact path="/select" element={<Select/>} />
          <Route exact path="/prev" element={<Preview  set={setProgress}/>} ></Route>
          <Route exact path="*" element={<Error set={setProgress} />} ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
