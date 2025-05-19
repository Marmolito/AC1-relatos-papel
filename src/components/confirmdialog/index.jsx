import './styles.css';

export default function ConfirmDialog({ message, onConfirm, onCancel }) {
  return (
    <div className="confirm-dialog__overlay">
      <div className="confirm-dialog">
        <p>{message}</p>
        <div className="confirm-dialog__buttons">
          <button onClick={onConfirm} className="confirm-dialog__confirm">
            Confirmar
          </button>
          <button onClick={onCancel} className="confirm-dialog__cancel">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
