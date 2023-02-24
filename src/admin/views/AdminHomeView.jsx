import { useEffect } from 'react';
import { usePetStore } from '../../hooks';
import { PetCard } from '../../vet/components';


export const AdminHomeView = () => {

    const { pets, startLoadingPets } = usePetStore();

    useEffect(() => {
        startLoadingPets();
    }, []);

    return (
        <main className="main">
            <h1 className="title">Inicio</h1>

            <div className="adoption">

                <div className="adopt">
                    {
                        pets.map(pet => (
                            <PetCard key={pet._id} pet={pet} />
                        ))
                    }
                </div>
            </div>
        </main>
    )
}