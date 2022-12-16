import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPetById } from "../../../api/auth.api";
import { Footer, Header, Hero } from "../../ui";

import '../styles/home.scss';

export const PetProfile = () => {

    const { id } = useParams();
    const [pet, setPet] = useState({});

    const navigate = useNavigate();

    const onNavigateBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        async function getPetAxios() {
            const result = await getPetById(id);
            console.log(result.data);
            setPet(result.data);
            // setPet(mascota);
        }
        getPetAxios();
    }, []);

    return (
        <>
            <Header />
            <main className="pet__profile section container">
                <div className="pet__img">
                    <img src="" alt="" />
                </div>
                <div className="pet__description">
                    <h4 className="text-center">{pet.nombre}</h4>
                    <p>Genero: <span>{pet.genero}</span></p>
                    <p>Edad: <span>{pet.edad}</span></p>
                    <p>Raza: <span>{pet.raza}</span></p>
                    <p>Color: <span>{pet.color}</span></p>
                    <p>Peso: <span>{pet.peso}</span></p>
                    <p>Fecha de Nacimiento: <span>{pet.fNacimiento}</span></p>
                    <p>Dueño: <span>{pet.propietario}</span></p>
                    <button className="button secondary" type="submit" href="#">Adoptar</button>
                </div>
            </main>
            <Footer />
        </>
    )
}