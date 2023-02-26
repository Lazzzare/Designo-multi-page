import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./layouts";
import styled from "styled-components";

import { Home, About, Design, Contact, Location } from "./pages";
function App() {
  return (
    <Main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/design/:category" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </Main>
  );
}

export default App;

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
`;
