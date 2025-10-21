import React, { useState } from "react";
import "./App.css";
import SideBar from "./pages/SideBar.jsx";
import { GoPlus } from "react-icons/go";
import { PiUserCircleGearLight } from "react-icons/pi";

function App() {
  const [projects, setProjects] = useState([]);
  const [newProjectName, setNewProjectName] = useState();

  const [isInput, setIsInput] = useState(false);

  const handleStartAddProject = () => {
    setIsInput(true);
    setNewProjectName("");
  };

  const handleInputChange = (e) => {
    setNewProjectName(e.target.value);
  };

  const handleSaveProject = () => {
    if (newProjectName.trim() !== "") {
      setProjects([...projects, newProjectName]);
      setNewProjectName("");
      setIsInput(false);
    } else {
      alert("Lütfen bir proje adı girin.");
    }
  };

  // const handleEditClick = (projectName) => {};

  const handleDeleteClick = (projectNameDelete) => {
    setProjects(
      projects.filter((projectName) => projectName !== projectNameDelete)
    );
  };

  return (
    <div className="projectsPage-container">
      <SideBar />
      <div className="projectPage">
        <div className="user">
          <button className="user-logo">
            <PiUserCircleGearLight />
          </button>
        </div>
        <div className="add-delete-list-bar">
          <ul>
            <li>
              <button
                className="add-project-button"
                onClick={handleStartAddProject}
              >
                <GoPlus /> Add Project
              </button>
            </li>
            <li>
              <button> List </button>
            </li>
            <li>
              <button> Board </button>
            </li>
            <li>
              <button>Calendar</button>
            </li>
            <li>
              <button>Table</button>
            </li>
          </ul>
        </div>
        <div className="projects">
          <ul className="project-list">
            {isInput && (
              <li className="new-project-input-item">
                <input
                  type="text"
                  value={newProjectName}
                  onChange={handleInputChange}
                  placeholder="Proje Adı Girin"
                />
                <button onClick={handleSaveProject}>Add</button>
              </li>
            )}

            {projects.map((projectName, index) => (
              <li key={index}>
                {projectName}{" "}
                <input
                  type="text"
                  value={newProjectName}
                  onChange={handleInputChange}
                />
                <button>Edit</button>
                <button onClick={() => handleDeleteClick(projectName)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
