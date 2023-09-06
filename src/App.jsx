import { useState } from "react";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeContainer from "./components/HomeContainer";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { isLoading } = useTheme();
  if (!isLoading) {
    return <div className="min-h-screen bg-mywhite"></div>;
  }
  return (
    <>
      <Header />
      <HomeContainer />
      <AboutMe />
      <Skills />
      <Portfolio />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
