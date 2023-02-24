import Swal from 'sweetalert2';
import { useRequestStore } from '../../hooks/useRequestStore';
import { useUiStore } from '../../hooks/useUiStore';


export const RequestRow = ({ request }) => {

    const { startAcceptRequest, startDeniedRequest, setActiveRequest } = useRequestStore();
    const { openRequestModal } = useUiStore();


    const onAcceptRequest = () => {
        console.log('Aceptando...');
        Swal.fire({
            title: 'Solicitud de Adopción',
            text: '¿Desea aceptar la solicitud de adopción?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Confirmado',
                    'La solicitud ha sido confirmada, se le notificará al usuario.',
                    'success'
                );
                startAcceptRequest(request?._id);
            }
        });
    }
    const onDenniedRequest = () => {
        console.log('Denegando...');
        Swal.fire({
            title: 'Solicitud de Adopción',
            text: '¿Desea rechazar y eliminar la solicitud de adopción?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, confirmar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Eliminado',
                    'La solicitud ha sido rechazada, se le notificará al usuario.',
                    'success'
                );
                await startDeniedRequest(request?._id);
            }
        });
    }

    const onViewRequest = () => {
        setActiveRequest(request);
        openRequestModal();
    }

    const date = new Date(request?.date);

    return (
        <tr>
            <td data-th="Info">
                <button
                    onClick={onViewRequest}
                    className="button-modal"
                >
                    Ver
                </button>
            </td>
            <td data-th="Mascota">
                {request?.pet.name}
            </td>
            <td data-th="Usuario">
                {request?.user.firstName}
            </td>
            <td data-th="Aceptado">
                {request?.acepted.toString()}
            </td>
            <td data-th="Fecha">
                {date.toLocaleDateString()}
            </td>
            <td data-th="Acciones">
                <button
                    onClick={onAcceptRequest}
                    className="button-modal"
                    disabled={request?.acepted}
                >
                    Aceptar
                </button>
                <br />
                <button
                    onClick={onDenniedRequest}
                    className="button-modal"
                    disabled={request?.acepted}
                >
                    Denegar
                </button>
            </td>
        </tr>
    )
}