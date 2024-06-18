import { useEffect, useState } from "react";
import CirclesList from '../components/CirclesList';
import './app.css';
import CirclesForm from "../components/form/CircleForm";

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
      {error ? (
        <div>Error: {error}</div>
      ) : (
        <CirclesList circles={circles} deleteFunction={handleDeletion} />
      )}

      <CirclesForm />
    </>
  );
}
