
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css'
import { Rejistration } from './pages/Rejistration'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from './pages/Home';
import { SingIn } from './pages/SingIn';
import { RootLayout } from './RootLayout';
import { Blogs } from './pages/Blogs';
import { About } from './pages/About';
import { Cheaper } from './pages/Cheaper';
import { Kid } from './pages/Kid';
import Archive from './pages/Archive';
import { ProductD } from './pages/ProductD';
import LoggedInUserRoute from './PrivateRoute/LoggedInUserRoute';
import NotLoggedInUserRoute from './PrivateRoute/NotLoggedInUserRoute';
import { ProductD2 } from './pages/ProductD2';
import { ProductD3 } from './pages/ProductD3';
import { ProductD4 } from './pages/ProductD4';
import { Product5 } from './pages/Product5';
import { Forget } from './Component/Forget';






function App() {

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route>
        
      


        <Route element={<LoggedInUserRoute/>}>
        <Route element={<RootLayout/>} >

             <Route path='/' element={< Home/>} />
             <Route path='/blogs' element={< Blogs/>} />
             <Route path='/about' element={< About/>} />
             <Route path='/cheaper' element={< Cheaper/>} />
             <Route path='/kid' element={< Kid/>} />
             <Route path='/archive' element={< Archive/>} />
             <Route path='/productD' element={< ProductD/>} />
             <Route path='/productD2' element={< ProductD2/>} />
             <Route path='/productD3' element={< ProductD3/>} />
             <Route path='/productD4' element={< ProductD4/>} />
             <Route path='/productD5' element={< Product5/>} />


          </Route>
        </Route>

        <Route element={ <NotLoggedInUserRoute/> }>
           <Route path='/rejistration' element={<Rejistration/>} />
           <Route path='/SignIn' element={<SingIn/>} />
           <Route path='/forget' element={<Forget />} />
        </Route>

        
        
        
      </Route>
    )
  )
 

  return (
    <>
      <RouterProvider router={router}/>
      
    </>
  )
}

export default App
