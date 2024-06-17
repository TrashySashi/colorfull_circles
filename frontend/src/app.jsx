import { useEffect, useState } from 'preact/hooks'

import './app.css'

export function App() {
  const [circles, setCircles] = useState([])

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    const response = await fetch("http://127.0.0.1:5000/circles")
    const data = await response.json()
    setCircles(data.circles)
    console.log(data.circles)
  }

  return (
    <>

    </>
  )
}
