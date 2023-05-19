import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from './auth/LoginRegister'
import { UserContext } from "./userContext";
import Header from './Layout/Header';
import NotFound from "./NotFound";
import ProfileCreate from './Profiles/ProfileCreate';
import ProfilesGrid from './Profiles/ProfilesGrid';
import { Provider } from 'react-redux';
import FilmStyle from './Style/FilmStyle';
import Payments from './Style/Payments';
import { store } from './store';
import Menu from './Style/Menu';

function App() {
  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");
  let [refresh, setRefresh] = useState(false);
  let [usuariId, setUsuariId] = useState("");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ refresh, setRefresh, usuari, setUsuari, authToken, setAuthToken, usuariId, setUsuariId }}>
        <Provider store={store}>
          {authToken ?
            <>
              <Header />
              <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<FilmStyle />} />
                <Route path="/profiles" element={<ProfilesGrid />} />
                <Route path="/profiles/create" element={<ProfileCreate />} />

                <Route path="/menu" element={<ProfileCreate />} />
                
                <Route path="/payments/" element={<Payments />} />
                <Route path="/film/" element={<FilmStyle />} />
              </Routes>
            </>
            :
            <LoginRegister />
          }
        </Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App
