import { Link } from 'react-router-dom';
import './login.scss';


export const Login = () => {
    return (
        <div className='login'>
            <div className="card">
                <div className="left">
                    <h1>MedicVet Delgado</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit sed molestias temporibus fugiat, facilis est aut qui quasi accusamus.
                    </p>
                    <span>¿No tienes una cuenta?</span>
                    <Link to="/register">
                        <button>Registrarse</button>
                    </Link>
                </div>
                <div className="right">
                    <h2>Iniciar Sesión</h2>
                    <form>
                        <input type="text" placeholder='Correo Electrónico' />
                        <input type="password" placeholder='Contraseña' />
                        <button type="submit">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}