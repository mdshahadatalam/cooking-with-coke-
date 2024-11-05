
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






function App() {

  const router = createBrowserRouter(

    createRoutesFromElements(
      <Route>

        <Route element={<RootLayout/>} > 

        <Route path='/rejistration' element={<Rejistration/>} />
        <Route path='/SignIn' element={<SingIn/>} />


         <Route path='/' element={< Home/>} />
         <Route path='/blogs' element={< Blogs/>} />
         <Route path='/about' element={< About/>} />
         
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
