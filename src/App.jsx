
import './App.css'
import Home from './pages/Home'
import Shop from './pages/Shop'
import RootLayout from './Components/RootLayout';

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ShopList from './pages/ShopList';
import ShopSideBar from './pages/ShopSideBar';
import ShoppingCurt from './pages/ShoppingCart';
import ProductDetails from './pages/ProductDetails';
import LogIn from './pages/LogIn';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import WishCard from './pages/WishCard';

function App() {
  let myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route element= {<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/aboutUs' element= {<AboutUs/>}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/blog" element={<Blog />}/>

        <Route path='/shopList' element= {<ShopList/>}/>
        <Route path='/shopSideBar' element= {<ShopSideBar/>}/>
        <Route path='/shoppingCart' element= {<ShoppingCurt />}/>
        <Route path='/wishCard' element= {<WishCard />}/>

        <Route path = '/shop/:id' element= {<ProductDetails />}/>
        <Route path = '/LogIn' element = {<LogIn />}/>
        <Route path = '/Contact' element = {<Contact/>}></Route>
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
