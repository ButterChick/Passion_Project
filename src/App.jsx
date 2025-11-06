import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './compents/Layout'
import Members from './pages/Members'
import Home from './pages/Home'
import Patients from './pages/Patients'
import NewPatientForm from './pages/NewPatientForm'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element ={<Home/>}/>
          <Route path='members' element ={<Members/>}/>
          <Route path='patients' element ={<Patients/>}/>
          <Route path='NewPatientForm' element = {<NewPatientForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
