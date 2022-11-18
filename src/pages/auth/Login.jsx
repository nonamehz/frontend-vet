import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../api/auth.api';
import { useForm } from '../../hooks/useForm';
import './login.scss';


export const Login = () => {

    const { correo, password, formValues, onChangeInputValue } = useForm({
        correo: '',
        password: ''
    });

    const navigate = useNavigate();

    const onLogin = async (event) => {
        event.preventDefault();
        try {
            const resp = await loginUser(formValues);
            console.log(resp);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    }

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
                    <form onSubmit={onLogin}>
                        <input
                            type="text"
                            placeholder='Correo Electrónico'
                            name='correo'
                            value={correo}
                            onChange={onChangeInputValue}
                        />

                        <input
                            type="password"
                            placeholder='Contraseña'
                            name='password'
                            value={password}
                            onChange={onChangeInputValue}
                        />

                        <button type="submit">Ingresar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}