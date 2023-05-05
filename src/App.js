import "./assets/css/style.css";
import { Router } from "./routes";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useEffect } from "react";
import { setToken } from "./services/ApiService";

function App() {
  const setTokenGrobally = () =>
    localStorage.token ? setToken(localStorage.getItem("token")) : null;

  useEffect(() => {
    // setTokenGrobally(); // TODO: get token from localStorage and set for axios instance
  }, []);

  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
