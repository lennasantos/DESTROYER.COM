import "./solucoes.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DEPOIMENTOS } from "./solucoes.data";

function NossasSolucoes() {
  const [slidesPerView, setSlidesPerView] = useState(4); // Estado inicial para telas maiores

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 550) {
        setSlidesPerView(1); // Até 550px
      } else if (window.innerWidth > 550 && window.innerWidth <= 880) {
        setSlidesPerView(2); // Entre 551px e 880px
      } else if (window.innerWidth > 880 && window.innerWidth <= 1024) {
        setSlidesPerView(3); // Entre 881px e 1024px
      } else {
        setSlidesPerView(4); // Acima de 1025px
      }
    }

    handleResize(); // Verifica o tamanho da tela quando o componente carrega

    window.addEventListener("resize", handleResize); // Adiciona o evento de resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove o evento ao desmontar o componente
    };
  }, []);

  return (
    <section className="container-bg" id="container-bg">
      <div className="solucoes-container">
        <h2>NOSSAS SOLUÇÕES</h2>
        <div className="solucoes-card">
          <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView}
            navigation
            pagination={{ clickable: true }}
            className="swiper-container"
          >
            {DEPOIMENTOS.map((solucoes) => (
              <SwiperSlide key={solucoes.id}>
                <div className="solucoes">
                  <img
                    src={solucoes.image}
                    className="slide-img"
                    alt="solucoes"
                  />
                  <cite>{solucoes.autor}</cite>
                  <p>{solucoes.texto}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default NossasSolucoes;
