import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Detail from "./pages/Detail"
import Checkout from "./pages/Checkout"
import Booked from "./pages/Booked"
import MyBooking from "./pages/MyBooking"
import "./index.css"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/detail" element={<Detail/>} />
          <Route path="/search" element={<Search/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/booked" element={<Booked/>} />
          <Route path="/my-booking" element={<MyBooking/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}