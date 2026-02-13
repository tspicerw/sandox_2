import { useStore } from './kanban_store'
import TicketComponent from './TicketComponent'
import './Kanban.css'

function Layout() {
    const { dragoverHandler, dropHandler } = useStore()

    return (
        <div className="kanban-container">
            <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                <TicketComponent />
            </div>
            <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                {/* test */}
            </div>
            <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                {/* test */}
            </div>
            <div className="kanban-column" onDrop={(e) => dropHandler(e)} onDragOver={(e) => dragoverHandler(e)}>
                {/* test */}
            </div>
        </div>
    )
}

export default Layout