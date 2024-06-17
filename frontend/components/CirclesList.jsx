import React from "react"

const CirclesList = ({ circles }) => {
    return <>
        <div>
            {circles.map((circle) => (
                <div>
                    <h1>{circle.circleName}</h1>
                    <p>{circle.color}</p>
                    <button>Delete</button>
                </div>

            ))}</div>
    </>
}

export default CirclesList