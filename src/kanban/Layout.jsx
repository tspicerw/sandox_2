import { useStore } from './kanban_store'
import TicketComponent from './TicketComponent'
import './Kanban.css'

function Layout() {
    const { dragoverHandler, dropHandler } = useStore()

    return (
        <>
            <h1>Kanban Board</h1>
            <div className="kanban-container">
                <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                    <span className='kanban-column-title'>To Do</span>
                    <TicketComponent />
                </div>
                <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                    <span className='kanban-column-title'>In Progress</span>
                    {/* test */}
                </div>
                <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                    <span className='kanban-column-title'>Done</span>
                    {/* test */}
                </div>
                <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                    <span className='kanban-column-title'>Blocked</span>
                    {/* test */}
                </div>
            </div>
        </>
    )
}

export default Layout