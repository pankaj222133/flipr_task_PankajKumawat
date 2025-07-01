import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutUs from "./components/AboutUs";
import ProjectsAndClients from "./components/ProjectsAndClients";
import NewsAndSubscription from "./components/NewsAndSubscription";
import "./App.css";

export const App = () => {
  return(
    <>
      <Navbar/> 
      <HeroSection/>
      <AboutUs/>
      <ProjectsAndClients/>
      {/* <bottomSection/> */}
      <NewsAndSubscription/>
    </>
  )
}