import { Link } from 'react-router-dom';


export const Header = () => {
    return (
        <header className="header">
            <nav className="navbar container">
                <Link className="navbar__brand">MedicVet Delgado</Link>
                <div className="navbar__links">
                    <Link to="/" className="navbar__link">Inicio</Link>
                    <Link to="/mascotas" className="navbar__link">Adopta</Link>
                    <Link to="/auth/login" className="navbar__link">Iniciar Sesión</Link>
                    <Link to="/admin" className="navbar__link">Panel</Link>
                    <Link to="/auth/login" className="navbar__link auth__logout">Cerrar Sesión</Link>
                </div>
            </nav>
        </header>
    )
}