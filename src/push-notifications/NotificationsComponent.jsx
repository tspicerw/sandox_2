import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import './photobooth.css'

function NotificationsComponent() {
    const videoRef = useRef(null)
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        async function startCamera() {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true })
                videoRef.current.srcObject = stream
            } catch (error) {
                console.error('Error accessing camera:', error)
            }
        }
        startCamera()
    }, [])


    function takePhoto() {
        const video = videoRef.current
        const canvas = document.createElement('canvas')
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight

        const context = canvas.getContext('2d')

        context.save()
        context.scale(-1, 1);
        context.drawImage(video, -canvas.width, 0, canvas.width, canvas.height)
        context.restore()

        const photoUrl = canvas.toDataURL()
        setPhotos(prev => [...prev, photoUrl])
    }
    async function sendPhotoStrip() {
        if (photos.length === 0) return

        const canvas = document.createElement('canvas')
        const videoWidth = 640
        const videoHeight = 480
        const padding = 20
        const bottomLabelRun = 60


        canvas.width = videoWidth + (padding * 2)
        canvas.height = (videoHeight * photos.length) + (padding * (photos.length + 1)) + bottomLabelRun

        const ctx = canvas.getContext('2d')

        ctx.fillStyle = '#ffffff'
        ctx.fillRect(0, 0, canvas.width, canvas.height)


        const loadImage = (url) => new Promise((resolve) => {
            const img = new Image()
            img.onload = () => resolve(img)
            img.src = url
        })


        for (let i = 0; i < photos.length; i++) {
            const img = await loadImage(photos[i])
            const x = padding
            const y = padding + (i * (videoHeight + padding))
            ctx.drawImage(img, x, y, videoWidth, videoHeight)
        }


        ctx.fillStyle = '#000000'
        ctx.font = '24px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(new Date().toLocaleString(), canvas.width / 2, canvas.height - 20)

        canvas.toBlob((blob) => {
            fetch(import.meta.env.VITE_NTFY_URL, {
                method: 'PUT',
                body: blob,
                headers: {
                    'Filename': `photobooth_${Date.now()}.jpg`,
                    'Title': 'New Photobooth Strip!',
                    'Priority': 'high'
                }
            })
        }, 'image/jpeg', 0.6)
    }

    return (
        <div className={`card`}>
            <h1>Photobooth</h1>
            <div className="photobooth">
                <video ref={videoRef} autoPlay muted />
                <aside>
                    {photos.map((photo, index) => (
                        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
                    ))}
                </aside>
            </div>
            <br />
            <br />
            <div className="theme-buttons">
                <button onClick={takePhoto} disabled={photos.length >= 4}>Snap Photo</button>
                <button onClick={sendPhotoStrip} disabled={photos.length === 0}>Send to ntfy!</button>
            </div>

            <br />
            <br />
            <img src={`https://ntfy.sh/t3rrys-happy-ping-app-for-sad-times/photobooth_${Date.now()}.jpg`} alt="Latest Photo" />

            <br />
            <br />
            <Link to="/">Go back Home</Link>
        </div>
    )
}

export default NotificationsComponent
