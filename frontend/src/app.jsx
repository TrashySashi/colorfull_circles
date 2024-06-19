import { useEffect, useState } from "react";
import { Route, BrowserRouter, Routes, Router } from "react-router-dom"
import CirclesList from './components/list/CirclesList';
import CirclesForm from "./components/form/CircleForm";
import Glass from "./components/glass/Glass";


export function App() {
  const [circles, setCircles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCircles();
  }, []);

  const fetchCircles = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/circles");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCircles(data.circles);
      console.log(data.circles);
    } catch (error) {
      console.error("Failed to fetch circles:", error);
      setError(error.message);
    }
  };

  const handleDeletion = () => {
    fetchCircles()
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/circles' element={<CirclesList circles={circles} deleteFunction={handleDeletion} />} />
          <Route path='/create_circle' element={<CirclesForm />} />

          <Route path="circles/circle/:id" element={<Glass />} />

        </Routes>

      </BrowserRouter>

    </>
  );
}
