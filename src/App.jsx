import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import { Provider } from 'react-redux'

import Home from './page/Home'
import ID from './page/ID'
import Cate from './page/Cate'
import store from './redux/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='products'>
            <Route path='category/:bookCate' element={<Cate />}/>
            <Route path='id/:bookID' element={<ID />}/>
          </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
