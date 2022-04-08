import './App.css';
import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import LogIn from './components/auth/LogIn';
import ProductList from './components/products/ProductList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Container maxWidth={false}>
          <NavBar/>
            <Container maxWidth={false}>
              <Routes>
                <Route path='/login' element={<LogIn/>}/>
                <Route path='/' element={<ProductList/>}/>
              </Routes>
            </Container>
          
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
