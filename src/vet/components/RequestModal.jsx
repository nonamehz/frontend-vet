import { useEffect, useMemo, useState } from 'react';

import Modal from 'react-modal';
import 'sweetalert2/dist/sweetalert2.min.css';
import { usePetStore } from '../../hooks';
import { useRequestStore } from '../../hooks/useRequestStore';
import { useUiStore } from '../../hooks/useUiStore';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        padding: '30px'
    },
};

Modal.setAppElement('#root');

export const RequestModal = () => {

    const { isRequestModalOpen, closeRequestModal } = useUiStore();
    const { activePet } = usePetStore();
    const { startSavingRequest, activeRequest, setActiveRequest } = useRequestStore();

    const [formValues, setFormValues] = useState({
        reason: '',
        responsible: '',
        livingPlace: '',
        haveTimeToCare: '',
        firstTime: '',
        hasOtherPets: '',
    });

    useEffect(() => {
        if (activeRequest !== null) {
            setFormValues({
                ...formValues,
                reason: activeRequest.reason,
                responsible: activeRequest.responsible,
                livingPlace: activeRequest.livingPlace,
                haveTimeToCare: activeRequest.haveTimeToCare,
                firstTime: activeRequest.firstTime,
                hasOtherPets: activeRequest.hasOtherPets,
            })
        }
    }, [activeRequest]);


    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const onCloseModal = () => {
        setActiveRequest(null);
        setFormValues({
            reason: '',
            responsible: '',
            livingPlace: '',
            haveTimeToCare: '',
            firstTime: '',
            hasOtherPets: '',
        });
        closeRequestModal();
    }

    const onSubmit = async (event) => {
        event.preventDefault();

        console.log({ ...formValues, pet: activePet._id });
        //TODO:
        await startSavingRequest({ ...formValues, pet: activePet._id });
        closeRequestModal();
    }

    return (
        <Modal
            isOpen={isRequestModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >

            <h2>Responda las siguientes preguntas:</h2>
            <br />
            <form onSubmit={onSubmit} className="form-container">

                <label className="form-label-modal" htmlFor="breed">¿Por qué desea adoptar una mascota?</label>
                <input
                    required={true}
                    className="form-input-modal"
                    autoComplete="off"
                    type="text"
                    name="reason"
                    value={formValues.reason}
                    onChange={onInputChange}
                />
                <br />
                <label className="form-label-modal" htmlFor="color">¿Quién será el responsable de la mascota?</label>
                <input
                    required={true}
                    className="form-input-modal"
                    autoComplete="off"
                    type="text"
                    name="responsible"
                    value={formValues.responsible}
                    onChange={onInputChange}
                />
                <br />
                <label className="form-label-modal" htmlFor="breed">¿Tiene una vivienda propia?</label>
                <input
                    required={true}
                    className="form-input-modal"
                    autoComplete="off"
                    type="text"
                    name="livingPlace"
                    value={formValues.livingPlace}
                    onChange={onInputChange}
                />
                <br />
                <label className="form-label-modal" htmlFor="color">¿Dispone de tiempo para invertir en la mascota?</label>
                <input
                    required={true}
                    className="form-input-modal"
                    autoComplete="off"
                    type="text"
                    name="haveTimeToCare"
                    value={formValues.haveTimeToCare}
                    onChange={onInputChange}
                />
                <br />
                <label className="form-label-modal" htmlFor="breed">¿Es la primera vez que ha adoptado en su vida?</label>
                <input
                    required={true}
                    className="form-input-modal"
                    autoComplete="off"
                    type="text"
                    name="firstTime"
                    value={formValues.firstTime}
                    onChange={onInputChange}
                />
                <br />
                <label className="form-label-modal" htmlFor="color">¿Usted tiene otras mascotas?</label>
                <input
                    required={true}
                    className="form-input-modal"
                    autoComplete="off"
                    type="text"
                    name="hasOtherPets"
                    value={formValues.hasOtherPets}
                    onChange={onInputChange}
                />

                <button
                    type="submit"
                    className="button-modal"
                >
                    Enviar Solicitud
                </button>

            </form>

        </Modal>
    )
}