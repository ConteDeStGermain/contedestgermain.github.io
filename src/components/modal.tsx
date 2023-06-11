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
          <p>{`Nous vous attendrons dans notre boutique le ${formattedDate} à ${data.time} au 75 Laurier Ave E. Notre expert, ${data.expert.name}, sera là pour répondre à toutes vos questions. Le coût cette réparation sera de ${data.service.price}$. Vous recevrez un courriel de confirmation prochainement.`}</p>
          <br />
          <p>{`${data.expert.name} est un maître horloger de renommée internationale avec plus de 30 ans d'expérience dans le domaine de la réparation de montres de luxe. Après avoir travaillé pour des maisons horlogères prestigieuses comme Rolex, Patek Philippe, et Audemars Piguet, Jeoffrey est reconnu pour son habileté exceptionnelle à réparer et à restaurer des montres d'une complexité inégalée. Il aura le plaisir de prendre votre montre en charge!`}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
