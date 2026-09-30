import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import './graham-scan-styles.css'
import convexHull from '../../../../../core-logic/convex-hull/graham-scan'

function GrahamScanPlayground() {
    const canvasRef = useRef(null)

    const [ points, setPoints ] = useState([])
    const [ simulation, setSimulation ] = useState(-1)
    const [ hull, setHull ] = useState([])
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d")

        ctx.clearRect(0, 0, canvas.width, canvas.height)

        // Draw the plane in canvas coordinates so it scales with the points.
        ctx.strokeStyle = "#dedede";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let position = 25; position < canvas.width; position += 25) {
            ctx.moveTo(position, 0);
            ctx.lineTo(position, canvas.height);
            ctx.moveTo(0, position);
            ctx.lineTo(canvas.width, position);
        }
        ctx.stroke();

        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        ctx.strokeStyle = "#a3a3a3";
        ctx.beginPath();
        ctx.moveTo(centerX, 0);
        ctx.lineTo(centerX, canvas.height);
        ctx.moveTo(0, centerY);
        ctx.lineTo(canvas.width, centerY);
        ctx.stroke();
        ctx.fillStyle = "#737373";
        ctx.font = "12px system-ui, sans-serif";
        ctx.fillText("x", canvas.width - 16, centerY - 8);
        ctx.fillText("y", centerX + 8, 16);
        ctx.fillText("0", centerX + 8, centerY + 16);

        ctx.strokeStyle = "#171717";
        ctx.lineWidth = 1.75;
        ctx.lineJoin = "round";
        ctx.fillStyle = "#171717"

        for (const p of points) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
            ctx.fill();
        }

        if (hull.length > 0 && simulation >= 0)
        {
            ctx.fillStyle = "#171717"

            const curSimulationStep = hull[1][simulation]
            // console.log(curSimulationStep)

            if (curSimulationStep.length >= 2)
            {
                for (var i = 0; i < curSimulationStep.length - 1; i++)
                {
                    const a = curSimulationStep[i]
                    const b = curSimulationStep[i + 1]
                    ctx.beginPath();
                    ctx.moveTo(a.x, a.y * -1);
                    ctx.lineTo(b.x, b.y * -1);
                    ctx.stroke();
                }
            }
        }
    }, [points, simulation])

    const handleClick = (e) => {
        if (simulation >= 0)
            return
        const rect = e.currentTarget.getBoundingClientRect()

        const xCoord = Math.trunc((e.clientX - rect.left) * e.currentTarget.width / rect.width)
        const yCoord = Math.trunc((e.clientY - rect.top) * e.currentTarget.height / rect.height)

        points.forEach((point) => {
            if (point.x === xCoord && point.y === yCoord)
                return
        })

        setPoints([...points, { x: xCoord, y: yCoord }])
    }

    const drawHull = () => {
        if (simulation >= 0)
            return
        const hull = convexHull(points.map(point => ({ ...point })))
        if (!hull)
            return
        setHull(hull)
        setSimulation(hull[1].length - 1)
    }
    const handleNext = () => {
        if (simulation >= 0)
            setSimulation(Math.min(simulation + 1, hull[1].length - 1))
    }

    const handleBack = () => {
        if (simulation >= 0)
            setSimulation(Math.max(simulation - 1, 0))
    }

    const handleStart = () => {
        if (simulation >= 0)
            setSimulation(0)
    }
    
    const handleEnd = () => {
        if (simulation >= 0)
            setSimulation(hull[1].length - 1)
    }

    const handleStop = () => {
        if (simulation >= 0)
        {
            setSimulation(-1)
            setHull([])
        }   
    }

    return (
        <div className='container'>
            <canvas
                className={`geometry-canvas${simulation >= 0 ? ' is-running' : ''}`}
                aria-label="Point drawing area with a two-dimensional coordinate grid"
                aria-describedby="board-hint"
                ref={canvasRef}
                width={500}
                height={500}
                onClick={handleClick}
            />
            <div className='panel'>
                <div className="inside-panel">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </div>
                    <div>
                        <button onClick={handleStart}>Start</button>
                        <button onClick={handleBack}>Back</button>
                        <button onClick={drawHull}>Start</button>
                        <button onClick={handleNext}>Next</button>
                        <button onClick={handleEnd}>End</button>
                    </div>
                    <button onClick={handleStop}>Stop</button>
                </div>
            </div>
        </div>
    )
}

export default GrahamScanPlayground