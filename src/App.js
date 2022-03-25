import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Header } from "./components/Header/Header";
import { ProjectCards } from "./components/ProjectCards/ProjectCards";
import { Cards } from "./components/Cards/Cards";
import Container from "@mui/material/Container";
import "./CSS/styles.css";
import { HashRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <HashRouter>
      <Container component="main">
        <NavigationBar />
        <Header></Header>
        <AppRouter />

        <Footer />
      </Container>
    </HashRouter>
  );
};
export default App;
