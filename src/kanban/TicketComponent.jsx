import { useEffect } from 'react'
import { useStore } from './kanban_store'
import './Kanban.css'

function TicketComponent() {
    const { tickets, dragstartHandler } = useStore()

    return (
        <>
            {tickets.map((ticket, index) => (
                <div className="ticket-container" id={ticket.id} key={index} draggable onDragStart={(e) => dragstartHandler(e)}>
                    <div className="ticket">
                        <span className='ticket-group'>
                            Title: {ticket.title}
                        </span>
                        <span className='ticket-group'>
                            Description: {ticket.description}
                        </span>
                        <span className='ticket-group'>
                            Priority: {ticket.priority}
                        </span>
                        <br />
                        <button onClick={() => { }}>Delete</button>
                        <button onClick={() => { }}>Update</button>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TicketComponent