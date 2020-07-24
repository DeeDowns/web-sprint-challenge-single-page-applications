import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
    const history = useHistory()

    return (
        <div>
            <h1>Click to fill out form</h1>
            <button onClick={() => history.push('/pizza')}>to form</button>
        </div>
    )
}

export default Home