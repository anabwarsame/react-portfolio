export const ProjectCards = () => {
  return (
    <section className="container my-3 d-flex flex-wrap justify-content-center ">
      <div className="card-container" style={{ width: "18rem" }}>
        <img
          src={require("../../images/Screenshot 2022-01-22 at 22.21.56.png")}
          className="card-img-top"
          alt="foodtopia img"
        />
        <div className="card-body">
          <h5 className="card-title">Project 1 - Foodtopia</h5>
          <p className="card-text">
            This is a food recipe app which caters to all food intolerance's,
            whereby a user can filter to their dietary needs and render recipe
            cards.
          </p>
        </div>

        <div className="card-body d-flex flex-wrap justify-content-center">
          <a
            href="https://github.com/anabwarsame/Foodtopia/"
            className="card-link"
          >
            Github
          </a>
        </div>
      </div>
      <div className="card-container" style={{ width: "18rem" }}>
        <img
          src={require("../../images/Screenshot 2022-01-31 at 02.54.14.png")}
          className="card-img-top"
          alt="foodtopia img"
        />
        <div className="card-body">
          <h5 className="card-title">Project 2 - Food4U</h5>
          <p className="card-text">
            An application where users can upload, edit, delete food posts using
            its own server-side API, user authentification, and which connects
            to a database.
          </p>
        </div>

        <div className="card-body d-flex flex-wrap justify-content-center">
          <a
            href="https://github.com/anabwarsame/Food4u/"
            className="card-link"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};
