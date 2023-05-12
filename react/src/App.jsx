import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from './auth/LoginRegister'
import { UserContext } from "./userContext";
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import NotFound from "./NotFound";
import About from "./About";

function App() {

  let [authToken, setAuthToken] = useState("");
  let [usuari, setUsuari] = useState("");
  let [refresh, setRefresh] = useState(false);
  let [usuariId, setUsuariId] = useState("");

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ refresh, setRefresh, usuari, setUsuari, authToken, setAuthToken, usuariId, setUsuariId }}>
        {authToken ?
          <>
            <Header />
            <Routes>
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
          </>
          :
          <LoginRegister />
        }
      </UserContext.Provider>
    </BrowserRouter>
  );
}


export default App
