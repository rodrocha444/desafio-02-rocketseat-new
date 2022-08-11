import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { App } from './App'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}