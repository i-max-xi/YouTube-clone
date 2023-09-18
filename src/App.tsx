import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import FilterChips from "./FilterChips";
import { Paginator } from 'primereact/paginator';

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
    name: string;
  }

  const [first, setFirst] = useState(0);
  const [rows, ] = useState(10);
  const [totalRecords, setTotalRecords] = useState(0); // Total number of universities
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
        setTotalRecords(data.length); // Set the total number of universities
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGhanaianUniversities();
  }, []);

  const onPageChange = (event: { first: number; }) => {
    setFirst(event.first);
  };

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
            <h2>Ghanaian Universities</h2>
            <ul>
              {ghanaianUniversities.slice(first, first + rows).map((university) => (
                <li key={university.name}>{university.name}</li>
              ))}
            </ul>
          </div>
          <Paginator
            first={first}
            rows={1} // Display only one record per page
            totalRecords={totalRecords}
            onPageChange={onPageChange}
            template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
