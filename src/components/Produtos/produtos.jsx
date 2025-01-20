import { useEffect } from "react";
import "./produtos.css";

function Produtos() {
  useEffect(() => {
    let currentIndex = 0;
    const cards = document.querySelectorAll(".cards-produtos-passos");
    const totalCards = cards.length;

    function showSlide(index) {
      cards.forEach((card, i) => {
        card.style.transform = `translateX(${(i - index) * 100}%)`;
      });
    }

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalCards;
      showSlide(currentIndex);
    }

    const interval = setInterval(nextSlide, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="section-produtos">
      <div className="container-produtos">
        <div id="section-produtos-titulos">
          <p>AQUI TEMOS PRODUTOS SEM CHEIRO</p>
        </div>

        <div id="section-container-passos">
          <div className="cards-wrapper">
            <div className="cards-produtos-passos">
              <img
                src="src/assets/images/Produto.png"
                alt="produto 01"
                className="imagem-passos"
              />
            </div>
            <div className="cards-produtos-passos">
              <img
                src="src/assets/images/Produto.png"
                alt="produto 02"
                className="imagem-passos"
              />
            </div>
            <div className="cards-produtos-passos">
              <img
                src="src/assets/images/Produto.png"
                alt="produto 03"
                className="imagem-passos"
              />
            </div>
            <div className="cards-produtos-passos">
              <img
                src="src/assets/images/Produto.png"
                alt="produto 03"
                className="imagem-passos"
              />
            </div>
            <div className="cards-produtos-passos">
              <img
                src="src/assets/images/Produto.png"
                alt="produto 04"
                className="imagem-passos"
              />
            </div>
            <div className="cards-produtos-passos">
              <img
                src="src/assets/images/Produto.png"
                alt="produto 05"
                className="imagem-passos"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produtos;
