import axios from "axios"
import React from "react"

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
        <div>
            {circles.map((circle) => (
                <div>
                    <h1>{circle.circleName}</h1>
                    <p>{circle.color}</p>
                    <button onClick={() => onDelete(circle.id)}>Delete</button>
                </div>

            ))}</div>
    </>
}

export default CirclesList