import GrahamScanPlayground from './GrahamScanPlayground'
import './graham-scan-styles.css'

function GrahamScan() {
    return (
        <div className='pageContainer'>
            <div>
                <b>Graham-Scan</b>
                <p>
                    Greedy algorithm to find the convex hull of a set of points
                </p>
            </div>
            <GrahamScanPlayground />
        </div>
    )
}

export default GrahamScan