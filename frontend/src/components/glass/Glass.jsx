import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { useParams } from 'react-router-dom';
import './glass.css'

const Glass = ({ classes = '' }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [circle, setCircle] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetching = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/circles/circle/id=${id}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const data = await response.json();
                setCircle(data);
            } catch (error) {
                console.error('Error fetching circle data:', error);
            }
        };

        fetching();
    }, [id]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left - 160,
            y: e.clientY - rect.top - 160,
        });
    };

    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".glassmorphism-container"), {
            max: 5,
            speed: 60,
            easing: "cubic-bezier(.03,.05,.05,.05)",
            perspective: 800,
            transition: true
        });
    }, []);

    if (!circle) {
        return <div>Loading...</div>;
    }

    return (
        <section className='circle-box'>


            <div className={`glassmorphism-container ${circle.color}`} onMouseMove={handleMouseMove}>
                <div className={`glassmorphism-div`}>


                    <div className="color-overlay" style={{
                        left: mousePosition.x + 'px',
                        top: mousePosition.y + 'px',
                    }} />
                </div>
            </div>
            {/* <div className='box'>hi</div> */}
        </section>
    );
};

export default Glass;

