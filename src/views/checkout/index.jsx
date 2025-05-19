import { useState } from "react";
import { useCart } from "../../hooks/cartcontext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import CheckoutSummary from "../../components/checkoutsummary";
import ConfirmDialog from "../../components/confirmdialog";
import './styles.css';

export default function Checkout() {
  const { cartItems, clearCart } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!cartItems || cartItems.length === 0) {
      navigate("/home");
    }
  }, [cartItems, navigate]);

 const handleConfirmPurchase = () => {
    clearCart();
    navigate("/home");
  };

  return (
    <div className="checkout">
      <CheckoutSummary cartItems={cartItems} />
      <button onClick={() => setShowConfirm(true)} className="checkout__button">
        Confirmar compra
      </button>

      {showConfirm && (
        <ConfirmDialog
          message="¿Estás seguro de confirmar la compra?"
          onConfirm={() => {
            handleConfirmPurchase();
            setShowConfirm(false);
          }}
          onCancel={() => setShowConfirm(false)}
        />
      )}
    </div>
  );
}
