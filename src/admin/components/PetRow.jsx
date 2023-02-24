import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { usePetStore } from '../../hooks';
import { useUiStore } from '../../hooks/useUiStore';
import { ImageModal } from './ImageModal';


export const PetRow = ({ pet }) => {

    const { setActivePet, startDeletingPet, activePet } = usePetStore();
    const { openImageModal } = useUiStore();

    const navigate = useNavigate();

    const onEditPet = () => {
        setActivePet(pet);
        navigate('/admin/form');
    }

    const onDeletePet = async () => {
        setActivePet(pet);
        Swal.fire({
            title: 'Eliminar Mascota',
            text: '¿Desea eliminar la mascota?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Confirmado',
                    'La mascota ha sido eliminada',
                    'success'
                );
                await startDeletingPet(pet._id);
            }
        })
        console.log('borrado');
    }

    const onChangePhoto = () => {
        setActivePet(pet);
        openImageModal();
        console.log('open modal');
    }

    return (
        <tr>
            <td data-th="Nombre">
                {pet?.name}
            </td>
            <td data-th="Edad">
                {pet?.age}
            </td>
            <td data-th="Raza">
                {pet?.breed}
            </td>
            <td data-th="Genero">
                {pet?.gender}
            </td>
            <td data-th="Dueño">
                {pet?.owner}
            </td>
            <td data-th="Adoptado">
                {pet?.adopted.toString()}
            </td>
            <td data-th="Estado">
                {pet?.state.toString()}
            </td>
            <td data-th="Acciones">
                <button className='button-modal' onClick={onEditPet}>EDITAR</button>
                <button className='button-modal' onClick={onDeletePet}>ELIMINAR</button>
                <button className='button-modal' onClick={onChangePhoto}>Cambiar Foto</button>
            </td>
            <ImageModal />
        </tr>
    )
}