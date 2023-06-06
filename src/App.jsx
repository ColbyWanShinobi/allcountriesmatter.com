import { useState } from 'react'
import Main from './components/Main/Main';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Main/>
    </div>
  )
}

export default App
