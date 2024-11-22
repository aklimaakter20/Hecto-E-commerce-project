
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'


function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route >
        <Route path="/" element={<Home />} />
        <Route path='/shop' element={<Shop />}/>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={myRouter}/>
   
    </>
  )
}

export default App
