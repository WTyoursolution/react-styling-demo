import { Route, Router, Routes } from 'react-router-dom'
import './App.scss'
import Home from './pages/homepage/home';

function App() {
  return (
    <>
    
<Routes>
  <Route path="/" element={ <Home />} />
</Routes>
    </>
  );
}


export default App
