import { Routes, Route } from "react-router-dom";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
// import your route components too

// render(
//   <BrowserRouter>

//   </BrowserRouter>,
//   document.getElementById("root")
// );
const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
};
export default AppRouter;
