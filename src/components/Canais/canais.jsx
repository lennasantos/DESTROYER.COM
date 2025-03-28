import "./canais.css";

function Canais() {
  return (
    <section className="canais-container" id="canais-container">
      <h1 className="canais-titulo">NOSSOS CANAIS DE ATENDIMENTO</h1>
      <div className="canais-conteudo">
        <div className="canais-coluna1">
          <h1>PERMANEÇA CONECTADO</h1>
          <div className="canais-icones">
            <a
              href="https://www.instagram.com/destroyerfipronil/profilecard/?igsh=MXB1dXdydTJvOXl4bA=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./assets/images/instagram.png" alt="Instagram" />
            </a>
            <a
              href="https://www.tiktok.com/@destroyer9789?_t=8scNOsw3dH4&_r=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./assets/images/tiktok.png" alt="TikTok" />
            </a>
          </div>

          <div className="canais-horario">
            <img
              className="relogio"
              src="./assets/images/horario.png"
              alt="Relógio"
            />
            <p className="horario">
              Horário de funcionamento: segunda à sexta das 08:00 às 18:00
            </p>
          </div>

          {/* Link clicável com ícone e texto juntos */}
          <div className="canais-icone-link">
            <a
              href="https://actionmarketing.my.canva.site/destroyer"
              target="_blank"
              rel="noopener noreferrer"
              className="link-container"
            >
              <img
                className="icone-link"
                src="./assets/images/icon link.png"
                alt="Ícone Link"
              />
              <p className="link">Para mais informações, clique aqui.</p>
            </a>
          </div>
        </div>

        <div className="canais-coluna2">
          <h1>FALE CONOSCO</h1>
          <div className="canais-contato">
            <div className="canais-item">
              <a
                href="https://wa.me/5511945463989"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./assets/images/whats.png" alt="WhatsApp" />
              </a>
              <p>+55 11 94546-3989</p>
            </div>
            <div className="canais-item">
              <a href="mailto:aprimorarvisual@gmail.com">
                <img src="./assets/images/e-mail.png" alt="E-mail" />
              </a>
              <p>aprimorarvisual@gmail.com</p>
            </div>
            <div className="canais-item">
              <a href="tel:011945463989">
                <img src="./assets/images/telefone.png" alt="Telefone" />
              </a>
              <p>011 94546-3989</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Canais;
