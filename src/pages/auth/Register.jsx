import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../../api/auth.api';

import { useForm } from '../../hooks/useForm';
import './register.scss';


export const Register = () => {

    const { nombre, apellido, correo, password, celular, formValues, onChangeInputValue, onResetForm } = useForm({
        nombre: '',
        apellido: '',
        correo: '',
        password: '',
        celular: ''
    });

    const [error, setError] = useState('');

    const navigate = useNavigate();

    const onRegister = async (event) => {
        event.preventDefault();
        try {
            const resp = await registerUser(formValues);
            console.log(resp);
            navigate('/login');
        } catch (error) {
            console.log(error);
            console.log(error.response.data.errors[0].msg);
            setError(error.response.data.errors[0].msg);
            onResetForm();
        }
    }


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
                    <form onSubmit={onRegister}>
                        <input
                            type="text"
                            placeholder='Nombre'
                            name='nombre'
                            value={nombre}
                            onChange={onChangeInputValue}
                            required={true}
                        />

                        <input
                            type="text"
                            placeholder='Apellido'
                            name='apellido'
                            value={apellido}
                            onChange={onChangeInputValue}
                            required={true}
                        />

                        <input
                            type="number"
                            placeholder='Celular'
                            name='celular'
                            value={celular}
                            onChange={onChangeInputValue}
                            required={true}
                        />

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
                            placeholder='******'
                            name='password'
                            value={password}
                            onChange={onChangeInputValue}
                            required={true}
                        />

                        {error && <p className='msg-error'>{error}</p>}

                        <button type="submit">Registrarme</button>
                    </form>
                </div>
            </div>
        </div>
    );
}