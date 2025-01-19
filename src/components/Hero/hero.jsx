import "./Hero.css";
import { MENU_LINKS } from "./hero.data";
import { Button } from "./button";

function Hero() {
  return (
    <div className="heroContainer">
      {/* Menu de Navegação */}
      <nav className="navigationMenu">
        {MENU_LINKS.map(({ id, label }) => (
          <Button id={id} label={label} key={id} />
        ))}
      </nav>

      {/* Logo Central */}
      <img
        src="src/assets/images/logo destroyer.png"
        alt="Logo Destroyer"
        className="logo"
      />

      {/* Ícone do WhatsApp */}
      <a
        href="https://wa.me/message/7AANNAVATZZBP1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="whatsappIcon">
          <img
            src="src/assets/images/Whatsapp.png"
            alt="WhatsApp Icon"
            className="whatsappIcon"
          />
        </div>
      </a>
    </div>
  );
}

export default Hero;
