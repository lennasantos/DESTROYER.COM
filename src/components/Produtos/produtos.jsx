import { useEffect } from "react";
import "./produtos.css";

function Produtos() {
  useEffect(() => {
    let currentIndex = 0;
    const images = document.querySelector(".cards-wrapper");
    const totalImages = document.querySelectorAll(".imagem-passos").length;

    function nextSlide() {
      currentIndex = (currentIndex + 1) % totalImages;
      images.style.transform = `translateX(-${currentIndex * 170}px)`; // Controle da posição
    }

    const interval = setInterval(nextSlide, 3000);

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
            <img
              src="/assets/images/Produto.png"
              alt="produto 01"
              className="imagem-passos"
            />
            <img
              src="/assets/images/Produto.png"
              alt="produto 02"
              className="imagem-passos"
            />
            <img
              src="/assets/images/Produto.png"
              alt="produto 03"
              className="imagem-passos"
            />
            <img
              src="/assets/images/Produto.png"
              alt="produto 04"
              className="imagem-passos"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Produtos;
