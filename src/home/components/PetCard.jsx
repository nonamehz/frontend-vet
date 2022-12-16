

export const PetCard = ({ nombre, genero, edad, raza }) => {
    return (
        <div className="adopt__card">
            <div className="adopt__img">
                <img src="" alt="Pet Image" />
            </div>
            <div className="adopt__description">
                <h4>{nombre}</h4>
                <p>Género: <span>{genero}</span></p>
                <p>Edad: <span>{edad}</span></p>
                <p>Raza: <span>{raza}</span></p>
            </div>
            <a className="button secondary mb">Más Información</a>
        </div>
    )
}