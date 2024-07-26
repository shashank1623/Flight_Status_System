import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { Test } from './pages/Test';
function App() {

  return <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/signin' element={<Signin/>} />
        </Routes>

      </BrowserRouter>
  </>
}

export default App
