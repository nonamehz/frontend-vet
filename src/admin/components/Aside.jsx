import { Link, useNavigate } from "react-router-dom"


export const Aside = () => {

    const navigate = useNavigate()

    const onSignOut = () => {
        navigate('/');
    }

    return (
        <aside className="admin__aside">
            <nav className="admin__navbar">
                <Link className="admin__navbar-brand" to="/admin">MedicVet</Link>
                <div className="admin__navbar-links">
                    <Link className="admin__navbar-link" to="/admin">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24"
                            viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <polyline points="5 12 3 12 12 3 21 12 19 12" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                        Inicio
                    </Link>
                    <Link className="admin__navbar-link" to="/admin/mascotas">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dog-bowl" width="24"
                            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" />
                            <path d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" />
                            <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z" />
                        </svg>
                        Mascotas
                    </Link>
                    <Link className="admin__navbar-link" to="/admin/form">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-dog-bowl" width="24"
                            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M10 15l5.586 -5.585a2 2 0 1 1 3.414 -1.415a2 2 0 1 1 -1.413 3.414l-3.587 3.586" />
                            <path d="M12 13l-3.586 -3.585a2 2 0 1 0 -3.414 -1.415a2 2 0 1 0 1.413 3.414l3.587 3.586" />
                            <path d="M3 20h18c-.175 -1.671 -.046 -3.345 -2 -5h-14c-1.333 1 -2 2.667 -2 5z" />
                        </svg>
                        Agregar Mascota
                    </Link>
                    <Link className="admin__navbar-link" to="/admin/solicitudes">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table" width="24"
                            height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="#ffffff" fill="none" strokeLinecap="round"
                            strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="2" />
                            <line x1="4" y1="10" x2="20" y2="10" />
                            <line x1="10" y1="4" x2="10" y2="20" />
                        </svg>
                        Solicitudes
                    </Link>
                </div>
                <a onClick={onSignOut} className="admin__signOut">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24"
                        viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round"
                        strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                        <path d="M7 12h14l-3 -3m0 6l3 -3" />
                    </svg>
                    Salir
                </a>
            </nav>
        </aside>
    )
}