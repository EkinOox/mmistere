import React from 'react';
import { useNavigate } from "react-router-dom";
import './puzzle.css';

const Puzzle = () => {
    const navigate = useNavigate();
    const handleDragStart = (event) => {
        event.dataTransfer.setData('text/plain', event.target.id);
        event.target.style.opacity = '0.4';
    };

    const handleDragEnd = (event) => {
        event.target.style.opacity = '';
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const draggedItemId = event.dataTransfer.getData('text/plain');
        const dropzone = event.target.closest('.contenedorPieza');
        if (dropzone) {
            dropzone.appendChild(document.getElementById(draggedItemId));
            comprobarPuzzle();
        }
    };

    const comprobarPuzzle = () => {
        const piezas = ['pieza1', 'pieza2', 'pieza3', 'pieza4'];
        const contenedores = ['uno', 'dos', 'tres', 'cuatro'];

        const completado = piezas.every((pieza, index) => {
            const piezaPadreId = document.getElementById(pieza).parentNode.id;
            return piezaPadreId === contenedores[index];
        });

        if (completado) {
            document.body.classList.remove('body-background-amphi-tristan');
            navigate('/amphi2');
        }
    };

    const handleDragEnter = (event) => {
        return enter(event);
    };

    const handleDragLeave = (event) => {
        // You can add custom behavior here if needed
    };

    const enter = (event) => {
        return true;
    };

    const over = (event) => {
        if (event.target.className === "contenedorPieza" || event.target.id === "contenedorPiezas") {
            return false;
        } else {
            return true;
        }
    };

    return (
        <section id="contenedorPuzzle">
            <div id="contenedorPiezas" onDragOver={handleDragOver} onDrop={handleDrop}>
                <img id="pieza3"
                     src="https://1.bp.blogspot.com/-8LurPyhzlD4/USVEdAH-KJI/AAAAAAAAA54/INQRSWmH79k/s320/pieza3.jpg"
                     alt="pieza3" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}/>
                <img id="pieza2"
                     src="https://1.bp.blogspot.com/-daD5d1V4ct4/USVEdAGqdDI/AAAAAAAAA50/XXo8rBlTGpQ/s320/pieza2.jpg"
                     alt="pieza2" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}/>
                <img id="pieza4"
                     src="https://4.bp.blogspot.com/-2R3yc2Kggvo/USVEd9UUR5I/AAAAAAAAA6A/YBxpgYG15NI/s320/pieza4.jpg"
                     alt="pieza4" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}/>
                <img id="pieza1"
                     src="https://3.bp.blogspot.com/-gA3KvKhA-8w/USVEdAiWi6I/AAAAAAAAA58/btNKJqIkXHc/s320/pieza1.jpg"
                     alt="pieza1" draggable="true" onDragStart={handleDragStart} onDragEnd={handleDragEnd}/>
            </div>
            <div id="puzzle">
                <div className="contenedorPieza" id="uno" onDragEnter={handleDragEnter} onDragOver={handleDragOver}
                     onDragLeave={handleDragLeave} onDrop={handleDrop}></div>
                <div className="contenedorPieza" id="dos" onDragEnter={handleDragEnter} onDragOver={handleDragOver}
                     onDragLeave={handleDragLeave} onDrop={handleDrop}></div>
                <div className="contenedorPieza" id="tres" onDragEnter={handleDragEnter} onDragOver={handleDragOver}
                     onDragLeave={handleDragLeave} onDrop={handleDrop}></div>
                <div className="contenedorPieza" id="cuatro" onDragEnter={handleDragEnter} onDragOver={handleDragOver}
                     onDragLeave={handleDragLeave} onDrop={handleDrop}></div>
            </div>
        </section>
    );
};

export default Puzzle;
