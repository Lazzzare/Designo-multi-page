import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./layouts";

import { Home, About, Design, Contact, Location } from "./pages";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/design/:category" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/location" element={<Location />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
