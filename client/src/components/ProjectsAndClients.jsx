import React, { useState, useEffect } from "react";
import Ellipse23 from "/images/Ellipse 23.svg"; // Replace with the correct path to Ellipse 23
import Ellipse24 from "/images/Ellipse 24.svg"; // Replace with the correct path to Ellipse 24

const ProjectsAndClients = () => {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch projects and clients data from the backend
  useEffect(() => {
    // Fetch projects data
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError("Failed to fetch projects");
      }
    };

    // Fetch clients data
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/clients");
        const data = await response.json();
        setClients(data);
      } catch (err) {
        setError("Failed to fetch clients");
      }
    };

    // Call both fetch functions in parallel
    Promise.all([fetchProjects(), fetchClients()])
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="projects-clients-container">
      {/* Background SVGs */}
      {/* <img src={Ellipse23} alt="Ellipse 23" className="background-ellipse ellipse-23" /> */}
      {/* <img src={Ellipse24} alt="Ellipse 24" className="background-ellipse ellipse-24" /> */}

      {/* Our Projects Section */}


      <div className="our-projects">
        <h2>Our Projects</h2>
        <p>
          We know what buyers are looking for and suggest projects that will
          bring clients top dollar for the sale of their homes.
        </p>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.img || `/images/project${index+1}.svg`} // Fallback image if no image is provided
                alt={project.title}
                className="project-image"
              />
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button className="see-more-button">See More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="happy-clients">
        <h2>Happy Clients</h2>
        <div className="client-testimonials">
          {clients.map((client, index) => (
            <div key={index} className="client-card">
              <img
                src={client.img || `/images/client${index+1}.svg`} // Fallback image if no image is provided
                alt={client.name}
                className="client-image"
              />
              <h4>{client.name}</h4>
              <p>{client.description}</p>
              <p>{client.designation}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAndClients;
