import './App.css';
import Home from './Pages/Home';
import { Route, Routes } from 'react-router-dom';
import CompletedTask from './Pages/CompletedTask';
import ToDo from './Pages/ToDo';
import Calendar from './Pages/Calendar';
import NavBar from './Pages/NavBar';
import Footer from './Pages/Footer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/completedTask' element={<CompletedTask />}></Route>
        <Route path='/toDo' element={<ToDo />}></Route>
        <Route path='/calendar' element={<Calendar/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
