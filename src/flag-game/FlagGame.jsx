import { useEffect } from 'react'
import { useStore } from './game_store'
import { Link } from 'react-router-dom'
import Confetti from 'react-confetti'
import './FlagGame.css'

function FlagGame() {
    const { countries, attempts, currentCountry, error, fetchCountry, checkAnswer, fetchInput, incorrectAnswers } = useStore()
    const isWon = attempts.some(attempt => attempt.status === "correct");

    useEffect(() => {
        fetchCountry()
    }, [])

    return (
        <div className="card">
            {isWon && <Confetti recycle={false} numberOfPieces={500} useWindowSize />}
            <div>
                {currentCountry && (

                    <div key={currentCountry.name.common}>
                        <img src={currentCountry.flagUrl} alt={currentCountry.name.common} width="500" />
                        {/* for testing purposes only */}
                        {/* <h2>{currentCountry.name.common}</h2> */}
                    </div>
                )}
            </div>
            <div className="inputs-wrapper">
                {attempts.map((attempt, index) => (
                    <div className="input-wrapper" key={index}>
                        <input
                            type="text"
                            placeholder="Enter country name"
                            value={attempt.value}
                            onChange={(e) => fetchInput(index, e.target.value)}
                            autoComplete="off"
                            className={attempt.status}
                            name="country"
                            disabled={attempt.status !== "pending" || attempts.some(a => a.status === "correct")}
                            list={`countries-${index}`}
                            id={index}
                        />
                        <datalist id={`countries-${index}`}>
                            {Object.keys(countries).map((country, i) => (
                                <option key={i} value={!incorrectAnswers.includes(country) ? country : ""}></option>
                            ))}
                        </datalist>
                        <button
                            onClick={() => checkAnswer(index)}
                            disabled={attempt.status !== "pending" || attempts.some(a => a.status === "correct")}
                        >
                            Submit
                        </button>
                    </div>
                ))}
            </div>
            {error}
            <br />
            <br />
            <Link to="/">Go back Home</Link>
        </div>
    )
}

export default FlagGame