import React, { useState } from "react";
import "./App.css";
import SideBar from "./pages/SideBar.jsx";
import { GoPlus } from "react-icons/go";
import { PiUserCircleGearLight } from "react-icons/pi";

function App() {
  const [projects, setProjects] = useState([]);
  const [projectName, setProjectName] = useState("");
  const [isInput, setIsInput] = useState(false);
  const [editableProject, setEditableProject] = useState(null);
  const [editedProjectName, setEditedProjectName] = useState("");

  const handleStartAddProject = () => {
    setIsInput(true);
    setProjectName("");
  };

  const handleInputChange = (e) => {
    setProjectName(e.target.value);
  };

  const handleSaveProject = () => {
    setProjects([...projects, projectName]);
    setProjectName("");
    setIsInput(false);
  };

  const handleDeleteClick = (projectDelete) => {
    setProjects((prev) => prev.filter((p) => p !== projectDelete));
  };

  const handleEditClick = (project) => {
    setEditedProjectName(project);
    setEditableProject(project);
  };

  const handleEditInputChange = (e) => {
    setEditedProjectName(e.target.value);
  };

  const handleSaveEdit = () => {
    setProjects((prev) =>
      prev.map((p) => (p === editableProject ? editedProjectName : p))
    );
    setEditableProject(null);
    setEditedProjectName("");
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
                  value={projectName}
                  onChange={handleInputChange}
                  placeholder="Proje Adı Girin"
                />
                <button onClick={handleSaveProject}>Add</button>
              </li>
            )}

            {projects.map((project) => (
              <li key={project}>
                {editableProject === project ? (
                  <>
                    <input
                      type="text"
                      value={editedProjectName}
                      onChange={handleEditInputChange}
                    />
                    <button onClick={() => handleSaveEdit(project)}>OK</button>
                    <button onClick={() => handleDeleteClick(project)}>
                      Delete
                    </button>
                  </>
                ) : (
                  <>
                    <span>{project}</span>
                    <button onClick={() => handleEditClick(project)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteClick(project)}>
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
