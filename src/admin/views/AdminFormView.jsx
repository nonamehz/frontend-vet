import { useNavigate } from "react-router-dom";
import { registerPet } from "../../../api/auth.api";
import { useForm } from "../../hooks/useForm"


const formState = {
    nombre: '',
    edad: '',
    color: '',
    fNacimiento: '',
    genero: '',
    raza: '',
    peso: '',
    propietario: '',
    urlFoto: ''
}

export const AdminFormView = () => {

    const { formValues, onResetForm, onChangeInputValue } = useForm(formState);

    const { nombre, edad, color, fNacimiento, genero, raza, peso, propietario, urlFoto } = formValues;

    const navigate = useNavigate();

    const onRegisterPet = async (event) => {
        event.preventDefault();
        try {

            const resp = await registerPet({
                ...formValues,
                urlFoto: "https:url.com",
                rol: "ADMIN_ROLE"
            });
            console.log(resp);
            navigate('/admin/mascotas');

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <main className="main">

            <h1 className="title">Agregar Mascota</h1>

            <form onSubmit={onRegisterPet} className="register-form">
                <div className="form__container">
                    <label className="form-label" htmlFor="nombre">Nombre</label>
                    <input
                        className="form-input"
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeInputValue}
                    />

                    <label className="form-label" htmlFor="edad">Edad</label>
                    <input
                        className="form-input"
                        type="number"
                        min="0"
                        name="edad"
                        value={edad}
                        onChange={onChangeInputValue}
                    />

                    <label className="form-label" htmlFor="peso">Peso</label>
                    <input
                        className="form-input"
                        type="text"
                        name="peso"
                        value={peso}
                        onChange={onChangeInputValue}
                    />

                    <label className="form-label" htmlFor="propietario">Dueño</label>
                    <input
                        className="form-input"
                        type="text"
                        name="propietario"
                        value={propietario}
                        onChange={onChangeInputValue}
                    />
                </div>

                <div className="form__container">

                    <label className="form-label" htmlFor="raza">Raza</label>
                    <input
                        className="form-input"
                        type="text"
                        name="raza"
                        value={raza}
                        onChange={onChangeInputValue}
                    />

                    <label className="form-label" htmlFor="color">Color</label>
                    <input
                        className="form-input"
                        type="text"
                        name="color"
                        value={color}
                        onChange={onChangeInputValue}
                    />

                    <label className="form-label" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                    <input
                        className="form-input"
                        type="date"
                        name="fNacimiento"
                        value={fNacimiento}
                        onChange={onChangeInputValue}
                    />

                    <label className="form-label" htmlFor="genero">Género</label>
                    <input
                        className="form-input"
                        type="text"
                        name="genero"
                        value={genero}
                        onChange={onChangeInputValue}
                    />

                </div>

                <div className="form__container">
                    <div className="image__pet">
                        <label htmlFor="foto">Busca una imagen</label>
                        <input name="file" id="foto" className="primary input-file" type="file" />
                    </div>

                    <button type="submit" className="button secondary mt">Guardar</button>
                </div>

            </form>
        </main>
    )
}