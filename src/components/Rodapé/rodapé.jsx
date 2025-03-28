import "./rodapé.css";

function Rodape() {
  return (
    <footer className="rodape-container">
      <div className="rodape-content">
        <img
          src="/assets/images/LORETECH.LS.png"
          alt="Rodapé Image"
          className="rodape-image"
        />
        <h1 className="rodape-text">
          © 2025 |
          <a
            href="https://www.instagram.com/loretech.ls/"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-link"
          >
            {" "}
            Desenvolvido por Lorena Santos @loretech.ls | todos os direitos
            reservados.
          </a>
        </h1>
      </div>
    </footer>
  );
}

export default Rodape;
