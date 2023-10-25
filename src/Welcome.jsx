import React, { useEffect } from "react";

const Welcome = () => {
  useEffect(() => {
    document.title = "Epibooks";
    alert("Benvenuto in Epibooks!");
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
