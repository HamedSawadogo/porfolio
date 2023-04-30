import React from "react";
const Project = ({ data }) => {
  return (
    <div className="project-container">
      <img src={data.img} alt={`image du projet-${""}`} />
      <div className="content">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <h5>TECHNOLOGIES UTILISES</h5>
        {data.technos.map((techno, id) => (
          <li key={id}>✅{techno}</li>
        ))}
        <div className="visit">
          <i className="fa-brands fa-github" id="github"></i>
          {data.url ? (
            <a href={data.url} target="_blank" id="visiter">
              visiter ➡️
            </a>
          ) : (
            <small>hors Ligne</small>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
