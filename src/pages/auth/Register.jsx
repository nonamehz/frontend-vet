import { Link } from 'react-router-dom';
import './register.scss';


export const Register = () => {
    return (
        <div className='register'>
            <div className="card">
                <div className="left">
                    <h1>MedicVet Delgado</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque fugit sed molestias temporibus fugiat, facilis est aut qui quasi accusamus.
                    </p>
                    <span>¿Ya tienes una cuenta?</span>
                    <Link to="/login">
                        <button>Iniciar Sesión</button>
                    </Link>
                </div>
                <div className="right">
                    <h2>Registrarse</h2>
                    <form action="#">
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='Apellido' />
                        <input type="text" placeholder='Celular' />
                        <input type="email" placeholder='Correo Electrónico' />
                        <input type="password" placeholder='******' />
                        <button type="submit">Registrarme</button>
                    </form>
                </div>
            </div>
        </div>
    );
}