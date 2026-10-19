import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Search from "./pages/Search"
import Detail from "./pages/Detail"
import "./index.css"

export default function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/search" element={<Search/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}