import { useState } from 'react';
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

export const ImageModal = () => {

    const { isImageModalOpen, closeImageModal } = useUiStore();
    const [file, setFile] = useState(null);
    const { activePet, startSavingImagePet } = usePetStore();

    const onCloseModal = () => {
        closeImageModal();
    }

    const onUploadChange = ({ target }) => {
        const file = target.files[0];
        setFile(file);
    }

    const onSubmit = async () => {
        await startSavingImagePet(file, activePet._id);
        closeImageModal();
    }

    return (
        <Modal
            isOpen={isImageModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={200}
        >

            <h2>Cambiar Foto {activePet?.name}</h2>
            <br />
            <div className="form__container">
                <div className="image__pet">
                    <label htmlFor="foto">Busca una imagen</label>
                    <input name="file" id="foto" className="primary input-file" type="file" onChange={onUploadChange} />
                </div>

                <button
                    onClick={onSubmit}
                    className="button secondary mt"
                >
                    Guardar
                </button>
            </div>

        </Modal>
    )
}