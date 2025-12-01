import { useStore } from './store'
import { Link } from 'react-router-dom'

function IncrementOne() {
    const { count, increment, decrement, reset } = useStore()

    return (
        <div className="card">
            <h1>Increment One</h1>
            <button onClick={increment}>
                count is {count}
            </button>
            <button onClick={decrement} style={{ marginLeft: '10px' }}>
                Decrement
            </button>
            <button onClick={reset} style={{ marginLeft: '10px' }}>
                Reset
            </button>
            <br />
            <br />
            <Link to="/increment-two">Next Page: Shared State</Link>
            <br />
            <br />
            <Link to="/">Go back Home</Link>
        </div>
    )
}

export default IncrementOne
