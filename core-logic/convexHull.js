// Returns a negative number if b is to the left of c with respect to a, a positive is b is to the right of c, and 0 if all three points are collinear
function orientation(a, b, c)
{
    const v = a.x*(b.y-c.y)+b.x*(c.y-a.y)+c.x*(a.y-b.y) // determinant of all three points
    if (v < 0) return -1 // clockwise
    if (v > 0) return 1 // counter-clockwise
    return 0 // collinear
}

// Input: Array[{x: Integer, y: Integer}, ...],  n <= 500^2
function convexHull(points) {
    if (points.length < 3)
        return null

    // Tranformation to work with cartesian coordinates. Javascript return x,y coordinates of click events as distance relative to top-left of screen, so this makes the geometry easier to visualize
    points.forEach((point) => {
        point.y = -1 * point.y
    });

    // Find p0, defined as the point with lowest y coordinate. If several such points exist, tie is broken lowest x coordinate
    var p0 = points[0]
    for (const point of points)
    {
        if (point.y < p0.y)
            p0 = point
        else if (point.y === p0.y && point.x < p0.x)
            p0 = point
    }

    // Sort points by their polar angle relative to p0
    points.sort((a, b) => {
        const o = orientation(p0, a, b)
        if (o === 0) {
            const da = (p0.x - a.x) ** 2 + (p0.y - a.y) ** 2
            const db = (p0.x - b.x) ** 2 + (p0.y - b.y) ** 2
            return da - db
        }
        return o > 0 ? -1 : 1
    })

    // Reverse set of points collinear with p0 and the last point, necessary when drawing the polygon
    var i = points.length - 2
    while (i >= 0 && orientation(p0, points[i], points[points.length - 1]) === 0) // all of these are collinear. Because the array is sorted by polar angle, they form a suffix of the array
        i--
    i++
    points.slice(i, points.length).reverse().forEach((point, j) => {
        points[i + j] = point
    })


    // Start hull
    let stack = []
    let history = []
    for (var i = 0; i < points.length; i++)
    {
        if (stack.length > 0)   
            history.push([...stack])
        while (stack.length > 1 && orientation(stack[stack.length - 2], stack[stack.length - 1], points[i]) < 0)
        {
            history.push([...stack, points[i]])
            history.push([...stack])
            stack.pop()
            history.push([...stack])
        }
        stack.push(points[i])
    }
    history.push([...stack])
    stack.push(p0)
    history.push([...stack])
    const res = [stack, history]
    return res
}

export default convexHull