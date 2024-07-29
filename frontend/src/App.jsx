import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { AuthProvider } from './context/AuthContext';
import {PrivateRoute} from './components/PrivateRoute';

function App() {

  return <>
  <AuthProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<PrivateRoute> <Home/></PrivateRoute>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
        </Routes>

    </BrowserRouter>
  </AuthProvider>
  </>
}

export default App
