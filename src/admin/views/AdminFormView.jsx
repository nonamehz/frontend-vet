

export const AdminFormView = () => {
    return (
        <main className="main">

            <h1 className="title">Agregar Mascota</h1>

            <form className="register-form">
                <div className="form__container">
                    <label className="form-label" for="nombre">Nombre</label>
                    <input className="form-input" type="text" />

                    <label className="form-label" for="edad">Edad</label>
                    <input className="form-input" type="number" min="0" />

                    <label className="form-label" for="peso">Peso</label>
                    <input className="form-input" type="text" />

                    <label className="form-label" for="propietario">Dueño</label>
                    <input className="form-input" type="text" />
                </div>

                <div className="form__container">

                    <label className="form-label" for="raza">Raza</label>
                    <input className="form-input" type="text" />

                    <label className="form-label" for="color">Color</label>
                    <input className="form-input" type="text" />

                    <label className="form-label" for="fechaNacimiento">Fecha de Nacimiento</label>
                    <input className="form-input" type="date" />

                    <label className="form-label" for="genero">Género</label>
                    <select className="form-input" id="genero">
                        <option value="" selected>-- Seleccione --</option>
                        <option value="M">Macho</option>
                        <option value="H">Hembra</option>
                    </select>

                </div>

                <div className="form__container">
                    <div className="image__pet">
                        <label for="foto">Busca una imagen</label>
                        <input name="file" id="foto" className="primary input-file" type="file" />
                    </div>

                    <button type="submit" className="button secondary mt">Guardar</button>
                </div>

            </form>
        </main>
    )
}