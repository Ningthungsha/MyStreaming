import { useEffect} from "react";
import { useLocation} from "react-router-dom";

import "../styles/Global.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Trending from "../components/Trending";
import Recommended from "../components/Recommended";
import Premium from "../components/Premium";
import Footer from "../components/Footer";
import CategorySection from"../components/CategorySection";


function Home() {

  const location = useLocation();

useEffect(() => {
  if (location.search === "?scroll=categories") {
    setTimeout(() => {
      document.getElementById("categories")?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  }
}, [location]);
  return (
    <div>
        
      <Navbar />

      <Hero />

      <Categories />
            <CategorySection title=" Movies" category="Movies" />
            <CategorySection title="TV Shows" category="TV Shows" />
            <CategorySection title="Music" category="Music" />
            <CategorySection title=" Gaming" category="Gaming" />
            <CategorySection title=" Education" category="Education" />
             <CategorySection title="Sports" category="Sports" />
             <CategorySection title="Kids" category="Kids" />

      <Trending />

      <Recommended />

      <Premium />

      <Footer />
    </div>
    
  );
}

export default Home;