
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import RootLayout from './Components/RootLayout';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ShopList from './pages/ShopList';
import ShopSideBar from './pages/ShopSideBar';
import ShoppingCurt from './pages/ShoppingCurt';


function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element= {<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}/>
        <Route path='/shopList' element= {<ShopList/>}/>
        <Route path='/shopSideBar' element= {<ShopSideBar/>}/>
        <Route path='/shoppingCart' element= {<ShoppingCurt />}/>
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
