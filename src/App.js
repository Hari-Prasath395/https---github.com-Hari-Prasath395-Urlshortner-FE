
import { Routes ,Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import RequestPasswordReset from './pages/RequestPasswordReset';
import PasswordResetPage from './pages/PasswordResetPage';
import Urlshortener from './pages/Urlshortner';
import URLTable from './pages/ListUrls';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
   <Routes>
    <Route path={"/"}  element={<HomePage/>}/>
    <Route path={"/signup"}  element={<Signup/>}/>
    <Route path={"/login"}  element={<Login/>}/>
    <Route path="/request-password-reset" element={<RequestPasswordReset/>} />
    <Route path="/password-reset-success/:userId/:resetString" element={<PasswordResetPage/>} />
    <Route path="/urlshortner" element={<Urlshortener/>}></Route>
    <Route path="/urls" element={<URLTable/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
   </Routes>
    </div>
  );
}

export default App;
