import { useStore } from './kanban_store'
import TicketComponent from './TicketComponent'
import './Kanban.css'

function Layout() {
    const { dragoverHandler, dropHandler, addTicket } = useStore()

    return (
        <>
            <h1>Kanban Board</h1>
            <button onClick={() => addTicket({ id: 3, title: "Ticket 4", description: "Description 4", priority: "Low" })}>Create Ticket</button>
            <div className="kanban-container">

                <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                    <span className='kanban-column-title'>To Do</span>
                    <TicketComponent />
                </div>
                <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                    <span className='kanban-column-title'>In Progress</span>
                </div>
                <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                    <span className='kanban-column-title'>Done</span>
                </div>
                <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                    <span className='kanban-column-title'>Blocked</span>
                </div>
            </div>
            {/* <button onClick={() => addTicket({ id: 3, title: "Ticket 4", description: "Description 4", priority: "Low" })}>Add Ticket</button> */}
        </>
    )
}

export default Layout