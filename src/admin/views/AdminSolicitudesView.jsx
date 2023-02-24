import { useEffect } from 'react';
// import { usePetStore } from '../../hooks'
import { useRequestStore } from '../../hooks/useRequestStore';
import { RequestModal } from '../../vet/components';
import { RequestRow } from '../components';


export const AdminSolicitudesView = () => {

    // const { pets, startLoadingPets, setActivePet } = usePetStore();
    const { requests, startLoadingRequest } = useRequestStore();
    console.log(requests);

    useEffect(() => {
        startLoadingRequest();
    }, []);

    return (
        <main className="main">
            <h1 className="title">Mascotas</h1>
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Info</th>
                        <th>Mascota</th>
                        <th>Usuario</th>
                        <th>Aceptado</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                    {
                        requests.map(request => (
                            <RequestRow key={request._id} request={request} />
                        ))
                    }
                </tbody>
            </table>
            <RequestModal />
        </main>
    )
}
