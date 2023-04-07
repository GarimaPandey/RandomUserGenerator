import './App.css';
import RandomUser from './components/RandomUsers';
import {BrowserRouter, Switch, Route, Routes } from 'react-router-dom';
import UserDetail from './components/UserDetail';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RandomUser />}></Route>
      <Route path="/view" element={<UserDetail/>}></Route>
      <Route path="/view/:id" component={UserDetail} />

    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
