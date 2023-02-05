import logo from './img/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Headernav from './components/Headernav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Logout from './components/Logout';
import Admin from './pages/Admin';
import Users from './pages/Users';
import Update from './pages/Update';


function App() {
  return (
    <>
      <BrowserRouter>
        <Headernav />
        <Container className=" mx-auto " style={{ width: "900px" }}>
          <Routes>
            <Route index element={<Signin/>} />
            <Route path='/login' element={<Signin />} />
            <Route path='/signup' element={<Signup />} />
            <Route path="/logout" element={ <Logout /> } />
            <Route path='/admin' element={<Admin />} />
            <Route path='/users' element={<Users />} />
            <Route path="/update" element={ <Update /> } />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
