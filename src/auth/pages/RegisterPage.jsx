import { Link, useNavigate } from 'react-router-dom';

import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { useAuthStore } from '../../hooks/useAuthStore';

export const RegisterPage = () => {

    const { startRegister } = useAuthStore();

    const { firstName, lastName, email, password, phone, onChangeInputValue } = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    });

    const navigate = useNavigate();

    const onRegister = async (event) => {
        event.preventDefault();
        startRegister({ firstName, lastName, email, password, phone });
        // navigate('/', { replace: true });
    }


    return (
        <AuthLayout title="Registrarse">
            <form onSubmit={onRegister}>
                <input
                    type="text"
                    placeholder="Nombres"
                    autoComplete="off"
                    name="firstName"
                    value={firstName}
                    onChange={onChangeInputValue}
                    required={true}
                />

                <input
                    type="text"
                    placeholder="Apellidos"
                    autoComplete="off"
                    name="lastName"
                    value={lastName}
                    onChange={onChangeInputValue}
                    required={true}
                />

                <input
                    type="number"
                    placeholder="Número Celular"
                    autoComplete="off"
                    name="phone"
                    value={phone}
                    onChange={onChangeInputValue}
                    required={true}
                />

                <input
                    type="email"
                    placeholder="Correo Electrónico"
                    autoComplete="off"
                    name="email"
                    value={email}
                    onChange={onChangeInputValue}
                    required={true}
                />

                <input
                    type="password"
                    placeholder="******"
                    name="password"
                    value={password}
                    onChange={onChangeInputValue}
                    required={true}
                />

                <button type="submit">Registrarme</button>
                <span>¿Ya tienes una cuenta? <Link to="/auth/login">Inicia Sesión.</Link></span>
            </form>
        </AuthLayout>
    );
}