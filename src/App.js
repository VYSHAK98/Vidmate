import {Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import History from "./pages/History";
import Pnf from './pages/Pnf';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path='/history' element={<History></History>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
