import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAuthStore, usePetStore } from '../../hooks';
import { useUiStore } from '../../hooks/useUiStore';
import { Footer, Header } from '../../ui';
import { RequestModal } from '../components';

import '../styles/styles.scss';


export const PetPage = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    const { startGetPet, setActivePet, activePet } = usePetStore();
    const { status } = useAuthStore();
    const { openRequestModal } = useUiStore();

    useEffect(() => {
        startGetPet(id);
    }, [id])


    const onNavigateBack = () => {
        navigate(-1);
        setActivePet(null);
    }

    const onOpenModal = () => {
        if (status !== 'authenticated') {
            Swal.fire('Error', 'Inicia Sesión para continuar', 'info')
            return;
        }
        openRequestModal();
        console.log('open modal');
    }

    const date = new Date(activePet?.birth);

    return (
        <>
            <Header />
            <main className="pet__profile section container">
                <div className="pet__img">
                    <img src={(activePet?.img) ? activePet.img : '../assets/img/no-image.png'} alt="" />
                </div>
                <div className="pet__description">
                    <h4 className="text-center">{activePet?.name}</h4>
                    <p>Genero: <span>{activePet?.gender}</span></p>
                    <p>Edad: <span>{activePet?.age}</span></p>
                    <p>Raza: <span>{activePet?.breed}</span></p>
                    <p>Color: <span>{activePet?.color}</span></p>
                    <p>Peso: <span>{activePet?.size}</span></p>
                    <p>Fecha de Nacimiento: <span>{date.toLocaleDateString()}</span></p>
                    <p>Dueño: <span>{activePet?.owner}</span></p>
                    <button
                        onClick={onOpenModal}
                        className="button
                    secondary"
                    >
                        Adoptar
                    </button>
                    <Link onClick={onNavigateBack} className="button primary">Volver</Link>
                </div>
            </main>
            <Footer />
            <RequestModal />
        </>
    )
}