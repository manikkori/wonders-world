import { useState } from 'react'
import "./index.css";
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Outlet } from 'react-router-dom';

function App() {

  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDark')));

  return (
    <div className={ isDark ? 'dark' : ''}>
      <Header setIsDark={setIsDark} isDark={isDark} />
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default App
