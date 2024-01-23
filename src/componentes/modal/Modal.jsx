
import { useState } from "react";


const Modal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      {/* Botón para abrir el modal */}
      <button type="button" onClick={handleOpenModal}>
        Open Modal
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal fondo-de-pantalla" tabIndex="-1">
         <div className="modal-dialog">
             <div className="modal-content">
             <div className="modal-header">
                 <h5 className="modal-title">Modal title</h5>
                 <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
             </div>
             <div className="modal-body">
                 <p>Modal body text goes here.</p>
             </div>
             <div className="modal-footer">
                 <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                 <button type="button" className="btn btn-primary">Save changes</button>
             </div>
             </div>
         </div>
     </div>
      )}
    </>
  );
};

export default Modal;


