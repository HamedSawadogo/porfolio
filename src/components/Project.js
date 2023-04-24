import React from "react";
const Project = ({ data }) => {
  const handleClick = () => {
    if (data.url) {
      window.location.href = data.url;
    }
  };
  return (
    <div className="project-container" onClick={() => handleClick()}>
      <img src={data.img} alt={`image du projet-${data.title}`} />
      <div className="content">
        <h4>{data.title}</h4>
        <p>{data.description}</p>
        <h5>TECHNOLOGIES UTILISES</h5>
        {data.technos.map((techno, id) => (
          <li key={id}>✅{techno}</li>
        ))}
        <div className="visit">
          <i class="fa-brands fa-github" id="github"></i>

          <a href={data.url && data.url} target="_blank" id="visiter">
            {data.url ? " visiter ➡️" : "Hors ligne"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
