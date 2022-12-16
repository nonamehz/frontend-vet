import { useEffect, useState } from 'react';
import { getPets } from '../../../api/auth.api';
import { PetCard } from '../../home/components/PetCard';


export const AdminHomeView = () => {

    const [pets, setPets] = useState([]);

    useEffect(() => {

        async function getDataPets() {
            const resp = await getPets();
            setPets(resp.data.mascotas)
        }
        getDataPets();

    }, []);

    return (
        <main className='main'>
            <h1 className="title">Inicio</h1>

            <div className="adoption">

                <div className="adopt">
                    {
                        pets.map(pet => (
                            <PetCard key={pet} {...pet} />
                        ))
                    }
                </div>

                <div className="container">
                    <a className="button primary mt">Ver todas las mascotas</a>
                </div>
            </div>
        </main>
    )
}