import { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import FilterChips from "./FilterChips";

function App() {
  const filters = [
    "All",
    "Live",
    "React",
    "Angular",
    "Vue",
    "Node",
    "Express",
    "MongoDB",
    "Comedy",
    "Recently uploaded",
    "New to you",
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // api call
  type Universities = {
    name : string;
  }
  const [ghanaianUniversities, setGhanaianUniversities] = useState<Universities[]>([]);

  useEffect(() => {
    const fetchGhanaianUniversities = async () => {
      try {
        const response = await fetch(
          "http://universities.hipolabs.com/search?country=Ghana"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGhanaianUniversities(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGhanaianUniversities();
  }, []);

  return (
    <div className="app">
      <Header toggleSidebar={toggleSidebar} notificationCount={5} />
      <div className="app__content">
        <SideBar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="app__main">
          <FilterChips
            filters={filters}
            setActiveFilter={setActiveFilter}
            activeFilter={activeFilter}
          />
          <div className="uni-list">
            {/* Render the list of Ghanaian universities */}
            <h2>Ghanaian Universities</h2>
            <ul>
              {ghanaianUniversities.map((university) => (
                <li key={university.name}>{university.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
