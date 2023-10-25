import "./App.css";
import BasicExample from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Welcome from "./Welcome";
import AllTheBooks from "./AllTheBooks";

function App() {
  return (
    <div>
      <BasicExample />
      <Welcome />
      <AllTheBooks />
      <Footer />
    </div>
  );
}

export default App;
