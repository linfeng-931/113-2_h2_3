import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Home from './page/Home'
import ID from './page/ID'
import Cate from './page/Cate'

function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='products'>
            <Route path='category/:bookCate' element={<Cate />}/>
            <Route path='id/:bookID' element={<ID />}/>
          </Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
