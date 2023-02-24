import { Link } from 'react-router-dom';


export const PetCard = ({ pet }) => {

    // console.log(pet);

    return (
        <div
            className="adopt__card"
        >
            <div className="adopt__img">
                <img src={(pet?.img) ? pet.img : 'assets/img/no-image.png'} alt="Pet Image" />
            </div>
            <div className="adopt__description">
                <h4>{pet?.name}</h4>
                <p>Género: <span>{pet?.gender}</span></p>
                <p>Edad: <span>{pet?.age}</span></p>
                <p>Raza: <span>{pet?.breed}</span></p>
            </div>
            <Link className="button secondary mb" to={`/mascota/${pet?._id}`}>Más Información</Link>
        </div>
    )
}