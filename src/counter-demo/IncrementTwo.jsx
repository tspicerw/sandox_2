import { useStore } from './counter_store'
import { Link } from 'react-router-dom'

function IncrementTwo() {
    const { count, increment, decrement, reset } = useStore()

    return (
        <div className="card">
            <h1>Increment Two</h1>
            <p>The count is currently: <strong>{count}</strong></p>
            <p>This count is shared with the page one!</p>

            <div className="card">
                <button onClick={increment}>
                    count is {count}
                </button>
                <button onClick={increment} style={{ marginLeft: '10px' }}>
                    Increment
                </button>
                <button onClick={decrement} style={{ marginLeft: '10px' }}>
                    Decrement
                </button>
                <button onClick={reset} style={{ marginLeft: '10px' }}>
                    Reset
                </button>
            </div>

            <br /><br />

            <Link to="/increment-one">Back to Page One</Link>
            <br />
        </div>
    )
}

export default IncrementTwo
