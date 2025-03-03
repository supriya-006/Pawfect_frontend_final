import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './component/Login'
import Home from './component/Home'
import Forget_password from './component/Forget_password'
import Signup from './component/Signup'
import Reset_password from './component/Reset_password'

function App() {
//   const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}> </Route>
        <Route path='/signup' element={<Signup/>}> </Route>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/forget_password' element={<Forget_password/>}> </Route>
        <Route path='/reset_password' element={<Reset_password/>}> </Route>
        
        
      </Routes>
      </BrowserRouter>
 </>
  )
}

export default App
