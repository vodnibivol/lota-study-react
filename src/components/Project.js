const Project = ({ img, title, tags }) => {
  return (
    <div className="project-container">
      <img src={img} alt="Project website" />
      <h2>{title}</h2>
      <ul className="tags">
        {tags.map((tag, i) => (
          <li key={i}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Project;
