import "./Hero.css";
import { MENU_LINKS } from "./hero.data";
import { Button } from "./button";

function Hero() {
  return (
    <div className="heroContainer">
      <nav className="navigationMenu">
        {MENU_LINKS.map(({ id, label }) => (
          <Button id={id} label={label} key={id} />
        ))}
      </nav>

      <img
        src="src/assets/images/logo destroyer.png"
        alt="Logo Destroyer"
        className="logo"
      />

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
