import React from 'react'
import { Link } from 'react-router-dom';
function Notfound() {
    return (
        <div>
            <h1>
                Not Found try another way
            </h1>
            <Link to="/">Go to home</Link>
        </div>
    )
}

export default Notfound
