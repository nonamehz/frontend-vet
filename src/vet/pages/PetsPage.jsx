import { useEffect } from 'react';
import { usePetStore } from '../../hooks';
import { Footer, Header, Hero } from '../../ui';
import { PetCard } from '../components';
import '../styles/styles.scss';

export const PetsPage = () => {

    const { pets, startLoadingPets, setActivePet } = usePetStore();

    useEffect(() => {
        startLoadingPets();
    }, []);

    return (
        <>
            <Header />
            <Hero />

            <div className="mt adopt container">

                {
                    pets.map(pet => (
                        <div key={pet._id} onClick={() => setActivePet(pet)}>
                            <PetCard pet={pet} />
                        </div>
                    ))
                }

            </div>

            <Footer />
        </>
    )
}