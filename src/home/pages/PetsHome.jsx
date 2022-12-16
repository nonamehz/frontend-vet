import { useEffect, useState } from "react";
import { getPets } from "../../../api/auth.api";
import { Footer, Header, Hero } from "../../ui"
import { PetCard } from "../components/PetCard";

import '../styles/home.scss';

export const PetsHome = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {

        async function getDataPets() {
            const resp = await getPets();
            setPets(resp.data.mascotas)
        }
        getDataPets();

    }, []);

    return (
        <>
            <Header />
            <Hero />

            <div className="mt adopt container">

                {
                    pets.map(pet => (
                        <PetCard key={pet.id} {...pet} />
                    ))
                }

            </div>

            <Footer />
        </>
    )
}