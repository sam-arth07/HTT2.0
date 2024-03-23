import { useState } from 'react'
import Banner from './assets/banner'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Banner images={images}/>
    </>
  )
}

export default App
