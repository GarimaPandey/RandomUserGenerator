import './App.css';
import RandomUser from './components/RandomUsers';
import {BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import UserDetail from './components/UserDetail';
import Home from './components/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />}></Route>
      <Route path="/user" element={<RandomUser />}></Route>
      <Route path="/view" element={<UserDetail/>}></Route>
      <Route path="/view/:id" component={UserDetail} />

    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
