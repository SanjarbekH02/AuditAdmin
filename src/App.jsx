import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'remixicon/fonts/remixicon.css';
import Profile from './Pages/Profile/Profile';
import Dashboard from './Pages/Dashboard/Dashboard'
import { Route, Router, Routes } from 'react-router-dom';
import AddLesson from './Pages/AddLesson/AddLesson'

function App() {
  return (
    <div className="App">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Profile />
        <Routes>
          <Route path='/' element={<Dashboard />}/>
          <Route />
          <Route />
          <Route path='/add' element={<AddLesson />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
