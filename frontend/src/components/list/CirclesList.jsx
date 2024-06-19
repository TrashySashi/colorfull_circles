import axios from "axios"
import React from "react"
import './list.css'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"



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

    const navigation = useNavigate()

    return <>
        <section className="container">
            {circles.map((circle) => (
                <div onClick={() => navigation(`circle/${circle.id}`)} className="card">
                    <h1 className="circle-name">{circle.circleName}</h1>
                    <p className="circle-color">{circle.color}</p>
                    <button className="btn" onClick={() => onDelete(circle.id)}>Delete</button>
                </div>


            ))}
            <Link to="/create_circle" >Back</Link>

        </section>
    </>
}

export default CirclesList