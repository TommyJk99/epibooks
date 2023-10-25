import React, { useEffect } from "react";

const Welcome = () => {
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
      <h3>Benvenuto!</h3>
      <br />
    </div>
  );
};

export default Welcome;
