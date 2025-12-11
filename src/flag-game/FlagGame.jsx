import { useStore } from './game_store'
import { Link } from 'react-router-dom'

function FlagGame() {
    const { countries, currentCountry, error, fetchCountry } = useStore()

    return (
        <div className="card">
            <h1>Pick a country</h1>
            <button onClick={fetchCountry}>
                Get Random Country
            </button>
            <br />
            <br />
            <div>
                {console.log(countries)}
                {currentCountry && (

                    <div key={currentCountry.name.common}>
                        <img src={currentCountry.flagUrl} alt={currentCountry.name.common} width="100" />
                        <h2>{currentCountry.name.common}</h2>
                    </div>
                )}
            </div>
            <div className="country-list">
            </div>
            {error}
            <br />
            <br />
            <Link to="/">Go back Home</Link>
        </div>
    )
}

export default FlagGame