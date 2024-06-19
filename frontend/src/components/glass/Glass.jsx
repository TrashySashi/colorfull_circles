import React, { useState, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';
import './glass.css'

const Glass = ({ class = '' }) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    return (
        <section className='circle-box'>


            <div className={`glassmorphism-container ${classes}`} onMouseMove={handleMouseMove}>
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

