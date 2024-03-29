import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom' ;
import Header  from './Component/Header' ;
import Home from './Component/Home' ;
import Calculator from './Component/Calculator' ;
import Login from './Component/Login' ;
import Signup from './Component/Signup' ;
import Todo from './Component/Todo' ;
import EmojiSearch from './Component/EmojiSearch' ;
import ImgGallery from './Component/ImgGallery' ;


function App() {
 
const [menuOpen, setMenuOpen] = useState(false) ;

  return (
    <BrowserRouter>
    <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/todo' element={<Todo />}  />
        <Route path='/emojiSearch' element={<EmojiSearch />}  />
        <Route path='/imgGallery' element={<ImgGallery />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
