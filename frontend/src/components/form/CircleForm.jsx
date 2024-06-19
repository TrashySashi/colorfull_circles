import React, { useState } from "react";
import axios from 'axios';
import "./form.css"
import Glass from "../glass/Glass";
import { Link } from "react-router-dom";

const CirclesForm = () => {
    const [color, setColor] = useState("");
    const [circleName, setCircleName] = useState("");



    const onSubmit = async (e) => {
        e.preventDefault();

        const data = {
            color,
            circleName
        };

        const url = "http://127.0.0.1:5000/create_cirlce";

        try {
            const response = await axios.post(url, data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status !== 201 && response.status !== 200) {
                alert(response.data.message);
            } else {
                console.log("Circle created successfully");
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <section className="form-container">

            <h2 className="title">Създай кръгче</h2>
            <form className="circle-form" onSubmit={onSubmit}>
                <div className="field">

                    <label htmlFor="color">Color:</label>
                    <select className="inputs" name="" id="">
                        <option value="pink">pink</option>
                        <option value="white">white</option>
                        <option value="blue">blue</option>
                        <option value="purple">purple</option>
                        <option value="red">red</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="circleName">Circle Name:</label>
                    <input
                        className="inputs"
                        type="text"
                        id="circleName"
                        value={circleName}
                        onChange={(e) => setCircleName(e.target.value)}
                    />
                </div>
                <button className="create-btn" type="submit">Create Circle</button>
            </form>

            <Link className="circles-link" to="/circles">Circles</Link>

        </section >
    );
};

export default CirclesForm;
