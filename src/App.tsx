import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { SelectedPage } from "./Types/types";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import OurClasses from "./components/OurClasses";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopPage, setIsTopPage] = useState(true);

  useEffect(() => {
    const handleScrool = () => {
      if (window.scrollY === 0) {
        setIsTopPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopPage(false);
      }
    };
    window.addEventListener("scroll", handleScrool);

    return () => {
      window.removeEventListener("scroll", handleScrool);
    };
  }, []);

  return (
    <div className="bg-gray-20">
      <Navbar
        isTopPage={isTopPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
