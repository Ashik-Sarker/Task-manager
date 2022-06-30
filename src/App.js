import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import CompletedTask from './Pages/CompletedTask';
import ToDo from './Pages/ToDo';
import Calendar from './Pages/Calendar';
import NavBar from './Pages/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/completedTask' element={<CompletedTask />}></Route>
        <Route path='/toDo' element={<ToDo />}></Route>
        <Route path='/calendar' element={<Calendar/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
