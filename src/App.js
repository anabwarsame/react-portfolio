import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { Header } from "./components/Header/Header";
import { ProjectCards } from "./components/ProjectCards/ProjectCards";
import { Cards } from "./components/Cards/Cards";
import Container from "@mui/material/Container";
import "./CSS/styles.css";

const App = () => {
  return (
    <Container component="main" maxWidth="xs">
      <NavigationBar></NavigationBar>
      <Header></Header>
      <ProjectCards></ProjectCards>
      <Cards></Cards>
    </Container>
  );
};
export default App;
