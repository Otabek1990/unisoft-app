import React from "react";
import "./App.css";
import Footer from "./components/footer/footer";
import Homepage from "./pages/homepage/homepage";
import ServicesPage from "./pages/services/services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsDetails from "./pages/projectDetails/projectsDetails";
import Projects from "./pages/projects/projects";
import AboutPart from "./pages/about/about";
import PartnersPage from "./pages/partners/partnersPage";
import Contacts from "./pages/contacts/contacts";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Homepage/>}/>
          <Route exact path="/about" element={<AboutPart/>}/>
          <Route exact path="/services" element={<ServicesPage/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/partners" element={<PartnersPage/>}/>
          <Route exact path="/contacts" element={<Contacts/>}/>
          <Route exact path="/projectsDetails/:id" element={<ProjectsDetails/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
