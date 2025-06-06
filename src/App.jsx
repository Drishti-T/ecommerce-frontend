import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Homepage } from './Pages/Homepage'
import { ProductPage } from './Pages/ProductPage'
import { Test } from './Pages/Test'

// import './App.css'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
          <Route path="/test" element={<Test></Test>}></Route>
          <Route path="/product/:id" element={<ProductPage></ProductPage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )

}


export default App
