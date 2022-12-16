

export const Header = () => {
    return (
        <header className="header">
            <nav className="navbar container">
                <a className="navbar__brand">MedicVet Delgado</a>
                <div className="navbar__links">
                    <a className="navbar__link">Inicio</a>
                    <a className="navbar__link">Adopta</a>
                    <a className="navbar__link">Iniciar Sesión</a>
                    <a className="navbar__link">Panel</a>
                    <a href="/" className="navbar__link auth__logout">Cerrar Sesión</a>
                </div>
            </nav>
        </header>
    )
}