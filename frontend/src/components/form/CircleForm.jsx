import React, { useState } from "react";
import axios from 'axios';
import "./form.css"

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
        <div>
            <h2 className="title">Създай своето кръгче</h2>
            <form className="circle-form" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="color">Color:</label>
                    <input
                        type="text"
                        id="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="circleName">Circle Name:</label>
                    <input
                        type="text"
                        id="circleName"
                        value={circleName}
                        onChange={(e) => setCircleName(e.target.value)}
                    />
                </div>
                <button type="submit">Create Circle</button>
            </form>
        </div>
    );
};

export default CirclesForm;
