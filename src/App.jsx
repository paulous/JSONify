import { useState } from 'react'
import './App.css'
import InputForm from './components/InputForm'
import Output from './components/Output'

function App() {
  const [data, setData] = useState('')

  return (
    <div className="test">
		<InputForm {...{data, setData}} />
		{data !== '' && <Output {...{data}} />}
    </div>
  )
}

export default App
