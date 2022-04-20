import { useEffect, useState } from 'react';
import { Home } from './pages/Home'
import { Dashboard } from './Dashboard'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LoggedNav } from './Components/LoggedNav';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Edit } from './pages/Edit';


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setUser(JSON.parse(localStorage.getItem('user')))
    }
    if (!localStorage.getItem('list')) {
      localStorage.setItem('list',JSON.stringify([]))
    }
  }, [])

  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider theme={darkTheme}>
          <Routes>
            <Route path="/" element={<>
              {
                (!user) ?
                  <Home setuser={setUser}></Home> :
                  <div>
                    <LoggedNav setuser={setUser} userimg={user.photoURL}></LoggedNav>
                    <div className="dasboard" style={{ display: 'flex', width: '98%',justifyContent:'center',alignItems:'center',marginLeft:'2.5vw',paddingTop:'29px'}}>
                      <Dashboard></Dashboard>
                    </div>
                  </div>
              }
            </>} />

            <Route path="/edit/:id" element={<Edit setuser={setUser}  />} />

          </Routes>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
