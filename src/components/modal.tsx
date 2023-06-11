import React, { MouseEvent } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  data: any
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) {
    return null;
  }

  const handleClickAway = (event: MouseEvent) => {
    event.stopPropagation();

    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  let date = new Date(data.date);

  let formattedDate = `${date.toLocaleString('fr-FR', { weekday: 'long' })} ${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()}`;

  function getRandomInt() {
    return Math.floor(Math.random() * (18 - 9) + 9);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto backdrop-blur-md bg-black bg-opacity-50"
      onClick={handleClickAway}
    >
      <div className="relative bg-white rounded-lg shadow-lg w-1/2">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-60"
          onClick={onClose}
        >
          X
        </button>
        <div className="p-6">
          <p>{`Nous vous attendrons dans notre boutique le ${formattedDate} à ${getRandomInt()}h00 au 75 Laurier Ave E. Notre expert, ${data.expert.name}, sera là pour répondre à toutes vos questions. Le coût cette réparation sera de ${data.service.price}$. Vous recevrez un courriel de confirmation prochainement.`}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
