import { create } from 'zustand'

export const useStore = create((set, get) => ({
    id: 0,
    tickets: [
        {
            id: 0,
            title: "Ticket 1",
            description: "Description 1",
            priority: "Low",
        },
        {
            id: 1,
            title: "Ticket 2",
            description: "Description 2",
            priority: "Medium",
        },
        {
            id: 2,
            title: "Ticket 3",
            description: "Description 3",
            priority: "High",
        },
    ],
    addTicket: (ticket) => set((state) => ({ tickets: [...state.tickets, ticket] })),
    deleteTicket: (ticket) => set((state) => ({ tickets: state.tickets.filter((t) => t.id !== ticket.id) })),
    updateTicket: (ticket) => set((state) => ({ tickets: state.tickets.map((t) => (t.id === ticket.id ? ticket : t)) })),
    priority: (ticket) => set((state) => ({ tickets: state.tickets.map((t) => (t.id === ticket.id ? ticket : t)) })),
    dragstartHandler: (e) => {
        e.dataTransfer.setData("text/plain", e.target.id)
    },
    dragoverHandler: (e) => {
        e.preventDefault()
    },
    dropHandler: (e) => {
        e.preventDefault()
        const data = e.dataTransfer.getData("text/plain")
        e.target.appendChild(document.getElementById(data))
    }
}))
