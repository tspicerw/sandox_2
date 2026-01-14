import { Link } from 'react-router-dom'
function NotificationsComponent() {
    return (
        <div className={`card`}>
            <h1>Notifications</h1>

            <div className="theme-buttons">
                <button onClick={() => fetch(import.meta.env.VITE_NTFY_URL, {
                    method: 'POST',
                    body: 'Be happy!'
                })}>Send Notification</button>
            </div>
            <br />
            <br />
            <Link to="/">Go back Home</Link>
        </div>
    )
}

export default NotificationsComponent
