import { Link, useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {

    const { startLogin } = useAuthStore();
    const { email, password, onChangeInputValue } = useForm({
        email: '',
        password: ''
    });

    // const navigate = useNavigate();

    const onLogin = (event) => {
        event.preventDefault();
        startLogin({ email, password });
        // navigate('/', { replace: true });
    }

    return (
        <AuthLayout title="Iniciar Sesión">
            <form onSubmit={onLogin}>
                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    name="email"
                    autoComplete="off"
                    value={email}
                    onChange={onChangeInputValue}
                    required={true}
                />

                <input
                    type="password"
                    placeholder="Contraseña"
                    name="password"
                    value={password}
                    onChange={onChangeInputValue}
                    required={true}
                />


                <button type="submit">Ingresar</button>

                <span>¿No tienes una cuenta? <Link to="/auth/register">Registrate.</Link></span>
                <span>Volver al <Link to="/">inicio.</Link></span>
            </form>
        </AuthLayout>
    );
}