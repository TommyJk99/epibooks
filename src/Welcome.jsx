import React, { useEffect } from "react";

const Welcome = () => {
  //hook per manipolare il DOM direttamente
  //ho aggiunto un timer al pop-up per permettere il caricamento della pagina
  useEffect(() => {
    document.title = "Epibooks";
    const timer = setTimeout(() => {
      alert("Benvenuto in Epibooks!");
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <br />
      <h3>📖 Benvenuto 📖</h3>
    </div>
  );
};

export default Welcome;
