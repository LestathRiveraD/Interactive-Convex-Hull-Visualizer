import './Board.css'
import { useEffect, useState } from 'react'
import convexHull from '../convexHull'
import GeometryCanvas from './GeometryCanvas'

function Board() {
    const [points, setPoints] = useState([])
    const [simulation, setSimulation] = useState(-1)
    const [hull, setHull] = useState([])

    useEffect(() => {
        let n = Math.floor(Math.random() * 11) + 15
        var newPoints = []

        for (var i = 0; i < n; i++)
        {
            let x, y
            do {
                x = Math.floor(Math.random() * 300) + 100
                y = Math.floor(Math.random() * 300) + 100 
            } while (newPoints.find(pnt => pnt.x === x && pnt.y === y))
            newPoints.push({x: x, y: y})       
        }
        setPoints(newPoints)
    }, [])

    const handleClear = () => {
        if (simulation == -1)
            setPoints([])
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

    return (
        <section className="board" aria-label="Convex hull playground">
            <div className="board-header">
                <span className="board-title">Drawing board</span>
                <span className="point-count">{points.length} points</span>
            </div>
            <p className="board-hint" id="board-hint">
                {simulation >= 0 ? 'Step through the hull, or stop to edit your points.' : 'Click the board to add points. Start with at least three.'}
            </p>
            <GeometryCanvas points={points} setPoints={setPoints} hull={hull} setHull={setHull} simulation={simulation} setSimulation={setSimulation} />
            <div className="board-actions">
                <button className="button-primary" onClick={drawHull} disabled={simulation >= 0 || points.length < 3}>Start simulation</button>
                <button onClick={handleClear} disabled={simulation >= 0 || points.length === 0}>Clear board</button>
            </div>
        </section>
    )
}

export default Board