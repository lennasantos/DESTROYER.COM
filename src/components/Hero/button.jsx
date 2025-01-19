export const Button = ({ label, id }) => {
  const clickDeNavegacao = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button className="navButton" onClick={() => clickDeNavegacao(id)}>
      {label}
    </button>
  );
};
