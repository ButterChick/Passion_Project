import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './compents/layout'
import Members from './pages/Members'
import Home from './pages/home'
import Patients from './pages/Patients'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element ={<Home/>}/>
          <Route path='members' element ={<Members/>}/>
          <Route path='patients' element ={<Patients/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
