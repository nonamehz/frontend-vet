import { useEffect } from 'react';
import { usePetStore } from '../../hooks'
import { PetRow } from '../components';


export const AdminMascotasView = () => {

    const { pets, startLoadingPets } = usePetStore();

    useEffect(() => {
        startLoadingPets();
    }, []);

    return (
        <main className="main">
            <h1 className="title">Mascotas</h1>
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Raza</th>
                        <th>Genero</th>
                        <th>Dueño</th>
                        <th>Adoptado</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                    {
                        pets.map(pet => (
                            <PetRow key={pet._id} pet={pet} />
                        ))
                    }
                </tbody>
            </table>
        </main>
    )
}