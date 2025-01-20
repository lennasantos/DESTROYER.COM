import { useState } from "react";
import "./duvidas.css";
import KeyboardDoubleArrowUpRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowUpRounded";
import { SOURCE } from "./duvidas.data";

function Duvidas() {
  const [openedItems, setOpenedItems] = useState([]);

  const handleClick = (event, selectedItem) => {
    event.preventDefault();

    setOpenedItems((prev) => {
      if (prev.some((i) => i === selectedItem)) {
        return prev.filter((previousItem) => previousItem !== selectedItem);
      }
      return [...prev, selectedItem];
    });
  };

  const firstColumn = SOURCE.slice(0, Math.ceil(SOURCE.length / 2));
  const secondColumn = SOURCE.slice(Math.ceil(SOURCE.length / 2));

  return (
    <section className="duvidas-container" id="section-duvidas">
      <h2 className="duvidas-titulo">TIRE SUAS DÚVIDAS</h2>

      <div className="duvidas-accordion">
        <div className="duvidas-perguntas">
          {firstColumn.map((item) => (
            <details
              key={item.summary}
              open={openedItems.some((i) => i === item.summary)}
              onClick={(event) => handleClick(event, item.summary)}
            >
              <summary>
                <KeyboardDoubleArrowUpRoundedIcon
                  fontSize="medium"
                  className="duvidas-icon"
                />
                {item.summary}
              </summary>
              <div>
                <p>{item.detail}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="duvidas-perguntas">
          {secondColumn.map((item) => (
            <details
              key={item.summary}
              open={openedItems.some((i) => i === item.summary)}
              onClick={(event) => handleClick(event, item.summary)}
            >
              <summary>
                <KeyboardDoubleArrowUpRoundedIcon
                  fontSize="medium"
                  className="duvidas-icon"
                />
                {item.summary}
              </summary>
              <div>
                <p>{item.detail}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Duvidas;
