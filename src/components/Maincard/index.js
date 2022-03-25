const MainCard = ({ project }) => {
  console.log(project.imageUrl);
  return (
    <>
      {" "}
      <div className="card-container" style={{ width: "18rem" }}>
        <img
          src={`${process.env.PUBLIC_URL}/${project?.imageUrl}`}
          className="card-img-top"
          alt="foodtopia img"
        />
        <div className="card-body">
          <h5 className="card-text">{project.name}</h5>
          <p className="card-text">{project.description}</p>
        </div>

        <div className="card-body d-flex flex-wrap justify-content-center">
          <a href={project.github} className="card-link">
            Github
          </a>
        </div>
      </div>
    </>
  );
};
export default MainCard;
