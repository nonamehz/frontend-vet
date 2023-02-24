import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks';


export const Header = () => {

    const { status, checkAuthToken, user, startLogout } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);

    const navigate = useNavigate();

    const onLogout = () => {
        startLogout();
        navigate('/auth/login');
    }

    return (
        <header className="header">
            <nav className="navbar container">
                <Link className="navbar__brand">MedicVet Delgado</Link>
                <div className="navbar__links">
                    <Link to="/" className="navbar__link">Inicio</Link>
                    <Link to="/mascotas" className="navbar__link">Adopta</Link>
                    {
                        (user.role === 'ADMIN_ROLE')
                            ? <Link to="/admin" className="navbar__link">Panel</Link>
                            : <></>
                    }
                    {
                        (status === 'authenticated')
                            ? <p onClick={onLogout} className="navbar__link cursor-pointer">Cerrar Sesión</p>
                            : <Link to="/auth/login" className="navbar__link auth__logout">Iniciar Sesión</Link>
                    }
                </div>
            </nav>
        </header>
    )
}