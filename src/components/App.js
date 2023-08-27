import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Container } from 'react-bootstrap'
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Home from './Home'
import NewNews from './NewNews'
import EditNews from './EditNews'
import ShowNews from './ShowNews'
import NavbarComponent from './Navbar'
import Contact from './Contact'


export default function App() {
  return (
    <React.Fragment>
        <BrowserRouter>
            <NavbarComponent/>
            <Container>  
              <Routes>
                  <Route path="/" element={<Home/>}></Route>
                  <Route path="/news" element={<Home/>}></Route>
                  <Route path='/news/new' element={<NewNews/>}></Route>
                  <Route path='/news/:id' element={<ShowNews/>}></Route>
                  <Route path='/news/:id/edit' element={<EditNews/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
              </Routes>
                  <ToastContainer/>
            </Container>
        </BrowserRouter>
    </React.Fragment>
  )
}
