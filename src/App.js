import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom' ;
import Header  from './Component/Header' ;
import Home from "./Component/Home" ;

function App() {
 
  const [menuOpen, setMenuOpen] = useState(false) ;

  return (
    <BrowserRouter>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
