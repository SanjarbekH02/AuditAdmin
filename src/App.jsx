import './App.css';
import Navbar from './Components/Navbar/Navbar';
import 'remixicon/fonts/remixicon.css';
import Profile from './Pages/Profile/Profile';
import Dashboard from './Pages/Dashboard/Dashboard'

function App() {
  return (
    <div className="App">
      <div className="left">
        <Navbar />
      </div>
      <div className="right">
        <Profile />
        <Dashboard/>
      </div>
    </div>
  );
}

export default App;
