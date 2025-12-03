import { Link } from 'react-router-dom'
import { useTheme, THEMES } from './ThemeContext'

function ThemeComponent() {
    const { theme, setTheme } = useTheme();

    return (
        <div className={`card theme-container ${theme}`}>
            <h1>Select a theme</h1>
            <p>Current Theme: <strong>{theme}</strong></p>

            <div className="theme-buttons">
                {Object.values(THEMES).map((t) => (
                    <button
                        key={t}
                        onClick={() => setTheme(t)}
                        style={{
                            margin: '0 5px',
                            fontWeight: theme === t ? 'bold' : 'normal',
                            border: theme === t ? '2px solid black' : '1px solid #ccc'
                        }}
                    >
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                    </button>
                ))}
            </div>

            <br />
            <br />
            <Link to="/">Go back Home</Link>
        </div>
    )
}

export default ThemeComponent
