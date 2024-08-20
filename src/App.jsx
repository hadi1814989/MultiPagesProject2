
import './App.css'
import Layout from './coponents/root/Layout'
import About from './pages/About'
import Home from './pages/Home'
import { createBrowserRouter,createRoutesFromElements,RouterProvider,Route } from 'react-router-dom'


function App() {
  let router = createBrowserRouter(createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
    </Route>
  ))

  return (
    <>
  
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
