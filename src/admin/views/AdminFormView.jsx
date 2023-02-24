import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePetStore } from '../../hooks';


export const AdminFormView = () => {

    const { startSavingPet, activePet, setActivePet } = usePetStore();

    const [formValues, setFormValues] = useState({
        name: '',
        age: '',
        color: '',
        birth: '',
        gender: '',
        breed: '',
        size: '',
        owner: '',
        img: '',
    });

    const navigate = useNavigate();

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const onRegisterPet = async (event) => {
        event.preventDefault();

        await startSavingPet({ ...formValues });
        navigate('/admin/mascotas');
        setActivePet(null);
    }

    const onCancelEdit = () => {
        setActivePet(null);
        navigate('/admin/mascotas');
    }

    useEffect(() => {
        if (activePet !== null) {
            setFormValues({ ...activePet });
        }
    }, [activePet])


    return (
        <main className="main">

            <h1 className="title">Agregar Mascota</h1>

            <form onSubmit={onRegisterPet} className="register-form">
                <div className="form__container">
                    <label className="form-label" htmlFor="name">Nombre</label>
                    <input
                        required={true}
                        className="form-input"
                        autoComplete="off"
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={onInputChange}
                    />

                    <label className="form-label" htmlFor="age">Edad</label>
                    <input
                        required={true}
                        className="form-input"
                        autoComplete="off"
                        type="number"
                        min="0"
                        name="age"
                        value={formValues.age}
                        onChange={onInputChange}
                    />

                    <label className="form-label" htmlFor="size">Peso</label>
                    <input
                        required={true}
                        className="form-input"
                        autoComplete="off"
                        type="text"
                        name="size"
                        value={formValues.size}
                        onChange={onInputChange}
                    />

                    <label className="form-label" htmlFor="owner">Dueño</label>
                    <input
                        required={true}
                        className="form-input"
                        autoComplete="off"
                        type="text"
                        name="owner"
                        value={formValues.owner}
                        onChange={onInputChange}
                    />
                </div>

                <div className="form__container">

                    <label className="form-label" htmlFor="breed">Raza</label>
                    <input
                        required={true}
                        className="form-input"
                        autoComplete="off"
                        type="text"
                        name="breed"
                        value={formValues.breed}
                        onChange={onInputChange}
                    />

                    <label className="form-label" htmlFor="color">Color</label>
                    <input
                        required={true}
                        className="form-input"
                        autoComplete="off"
                        type="text"
                        name="color"
                        value={formValues.color}
                        onChange={onInputChange}
                    />

                    <label className="form-label" htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                    <input
                        required={true}
                        className="form-input"
                        autoComplete="off"
                        type="text"
                        name="birth"
                        value={formValues.birth}
                        onChange={onInputChange}
                    />

                    <label className="form-label" htmlFor="gender">Género</label>
                    <input
                        required={true}
                        className="form-input"
                        autoComplete="off"
                        type="text"
                        name="gender"
                        value={formValues.gender}
                        onChange={onInputChange}
                    />

                </div>

                <div className="form__container">
                    {/* <div className="image__pet">
                        <label htmlFor="foto">Busca una imagen</label>
                        <input name="img" id="foto" className="primary input-file" type="file" onChange={onUploadChange} value={formValues.img} />
                    </div> */}

                    <button type="submit" className="button secondary mt">Guardar</button>
                    {
                        (activePet)
                            ? (
                                <button
                                    onClick={onCancelEdit}
                                    className="button secondary mt"
                                >
                                    Cancelar
                                </button>
                            )
                            : <></>
                    }
                </div>

            </form>
        </main>
    )
}