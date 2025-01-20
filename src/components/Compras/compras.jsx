import "./compras.css";

function Compras() {
  return (
    <div className="compras-container" id="compras-container">
      <h1 className="compras-main-title">COMPRAS</h1>

      <div className="compras-columns">
        <div className="compras-column">
          <h2 className="compras-title">MEIOS DE PAGAMENTOS</h2>
          <div className="compras-icons">
            <img src="/src/assets/images/visa logo.png" alt="Visa" />
            <img src="/src/assets/images/master logo.png" alt="MasterCard" />
            <img src="/src/assets/images/elo logo.png" alt="Elo" />
            <img src="/src/assets/images/hipercard logo.png" alt="Hipercard" />
            <img
              src="/src/assets/images/american express logo.png"
              alt="American Express"
            />
          </div>
          <div className="compras-icons separated">
            <img src="/src/assets/images/pix logo.png" alt="Pix" />
            <img src="/src/assets/images/boleto logo.png" alt="Boleto" />
          </div>
        </div>

        <div className="compras-column">
          <h2 className="compras-title">MEIOS DE ENVIOS</h2>
          <div className="compras-shipping-icons">
            <a
              href="https://www.mercadolivre.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="mercado-livre"
                src="/src/assets/images/mercado livre logo.png"
                alt="Mercado Livre"
              />
            </a>
            <img
              className="correios"
              src="/src/assets/images/correios logo.png"
              alt="Correios"
            />
          </div>
        </div>
      </div>

      <div className="compras-footer">
        <a
          href="https://wa.me/message/7AANNAVATZZBP1"
          target="_blank"
          rel="noopener noreferrer"
          className="compras-whatsapp-link"
        >
          <img
            src="/src/assets/images/whats.png"
            alt="WhatsApp"
            className="compras-whatsapp-icon"
          />
          <h2 className="compras-help-text">Precisa de ajuda?</h2>
        </a>
      </div>
    </div>
  );
}

export default Compras;
