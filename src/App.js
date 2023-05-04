import "./assets/css/style.css";
import { Router } from "./routes";
import Header from "./Layouts/Header";
import Footer from "./Layouts/Footer";

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
