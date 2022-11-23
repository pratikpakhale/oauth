import { Routes, Route } from 'react-router-dom'

import Auth from './components/Auth'
import Callback from './components/Callback'

function App() {
  return (
    <Routes>
      <Route path='/' element={<div>HOME</div>} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/callback' element={<Callback />} />
      <Route path='*' element={<div>404</div>} />
    </Routes>
  )
}

export default App
