

export const PetCard = () => {
    return (
        <div className="adopt__card">
            <div className="adopt__img">
                <img src="" alt="Pet Image" />
            </div>
            <div className="adopt__description">
                <h4>Nombre Mascota</h4>
                <p>Género: <span>Macho</span></p>
                <p>Edad: <span>5</span></p>
                <p>Raza: <span>Jack Russell</span></p>
            </div>
            <a className="button secondary mb">Más Información</a>
        </div>
    )
}