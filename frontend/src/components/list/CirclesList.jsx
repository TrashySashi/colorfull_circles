import axios from "axios"
import React from "react"
import './list.css'


const CirclesList = ({ circles, deleteFunction }) => {

    const onDelete = async (id) => {
        try {
            const url = `http://127.0.0.1:5000/delete_circle/${id}`;
            const response = await axios.delete(url);

            if (response.status === 200) {
                deleteFunction();
            } else {
                console.error("Failed to delete");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return <>
        <section className="container">
            {circles.map((circle) => (
                <div className="circle-container">
                    <h1>{circle.circleName}</h1>
                    <p>{circle.color}</p>
                    <button onClick={() => onDelete(circle.id)}>Delete</button>
                </div>

            ))}</section>
    </>
}

export default CirclesList