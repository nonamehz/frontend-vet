import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../../api/auth.api';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';


export const LoginPage = () => {

    const { correo, password, formValues, onChangeInputValue, onResetForm } = useForm({
        correo: '',
        password: ''
    });

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onLogin = async (event) => {
        event.preventDefault();
        try {
            const resp = await loginUser(formValues);
            console.log(resp);
            navigate('/');
        } catch (error) {
            console.log(error);
            console.log(error.response.data.msg);
            setError(error.response.data.msg);
            onResetForm();
        }
    }

    return (
        <AuthLayout title="Iniciar Sesión">
            <form onSubmit={onLogin}>
                <input
                    type="email"
                    placeholder='Correo Electrónico'
                    name='correo'
                    value={correo}
                    onChange={onChangeInputValue}
                    required={true}
                />

                <input
                    type="password"
                    placeholder='Contraseña'
                    name='password'
                    value={password}
                    onChange={onChangeInputValue}
                    required={true}
                />

                {error && <p className='msg-error'>{error}</p>}

                <button type="submit">Ingresar</button>

                <span>¿No tienes una cuenta? <Link to="/auth/register">Registrate.</Link></span>
            </form>
        </AuthLayout>
    );
}