import * as React from "react";

export const Cards = ({ project }) => {
  return (
    // <section className="container my-3 d-flex flex-wrap justify-content-center ">
    <div
      className="card-container col-md-3 col col-3"
      style={{ width: "18rem" }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/${project.imageUrl}`}
        className="card-img-top"
        alt="placeholder img"
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
    //   <div className="card-container" style={{ width: "18rem" }}>
    //     <img
    //       // src={require("../../images/placeholderimg.jpg")}
    //       className="card-img-top"
    //       alt="placeholder img"
    //     />
    //     <div className="card-body">
    //       <h5 className="card-text">Password Generator</h5>
    //       <p className="card-text">
    //         This is an application whereby the user can generate a completely
    //         random password at each instance, simply by the click of a button{" "}
    //       </p>
    //     </div>

    //     <div className="card-body d-flex flex-wrap justify-content-center">
    //       <a
    //         href="https://anabwarsame.github.io/Password-Generator/"
    //         className="card-link"
    //       >
    //         Github
    //       </a>
    //     </div>
    //   </div>

    //   <div className="card-container" style={{ width: "18rem" }}>
    //     <img
    //       // src={require("../../images/placeholderimg.jpg")}
    //       className="card-img-top"
    //       alt="placeholder img"
    //     />
    //     <div className="card-body">
    //       <h5 className="card-text">Code Quiz</h5>
    //       <p className="card-text">
    //         This project is to create a code quiz whereby the user answers
    //         questions under a time constraint and all their high scores are
    //         stored to view at the end
    //       </p>
    //     </div>

    //     <div className="card-body d-flex flex-wrap justify-content-center">
    //       <a
    //         href="https://anabwarsame.github.io/code-quiz/"
    //         className="card-link"
    //       >
    //         Github
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card-container" style={{ width: "18rem" }}>
    //     <img
    //       // src={require("../../images/placeholderimg.jpg")}
    //       className="card-img-top"
    //       alt="placeholder img"
    //     />
    //     <div className="card-body">
    //       <h5 className="card-text">Day Planner</h5>
    //       <p className="card-text">
    //         This is a project containing a work day calendar between the hours
    //         of 9AM-5PM. Its an easy to use calendar where the user can add text
    //         at specific hours to plan their day and save it.
    //       </p>
    //     </div>

    //     <div className="card-body d-flex flex-wrap justify-content-center">
    //       <a
    //         href="https://github.com/anabwarsame/Work-Day-Planner"
    //         className="card-link"
    //       >
    //         Github
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card-container" style={{ width: "18rem" }}>
    //     <img
    //       // src={require("../../images/placeholderimg.jpg")}
    //       className="card-img-top"
    //       alt="placeholder img"
    //     />
    //     <div className="card-body">
    //       <h5 className="card-text">Weather Dashboard</h5>
    //       <p className="card-text">
    //         This is an application whereby the user can search the weather for
    //         any city in the world. Those searches are saved into local storage,
    //         so the user can see their old history. This is done by fetching data
    //         fro an API
    //       </p>
    //     </div>

    //     <div className="card-body d-flex flex-wrap justify-content-center">
    //       <a
    //         href="https://anabwarsame.github.io/weather-dashboard/"
    //         className="card-link"
    //       >
    //         Github
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card-container" style={{ width: "18rem" }}>
    //     <img
    //       // src={require("../../images/placeholderimg.jpg")}
    //       className="card-img-top"
    //       alt="placeholder img"
    //     />
    //     <div className="card-body">
    //       <h5 className="card-text">Read-Me Generator</h5>
    //       <p className="card-text">
    //         Here the user interacts with the inquirer CLI that generates some
    //         questions and the user inputs their answers. The users response is
    //         then used to generate a readme.md
    //       </p>
    //     </div>

    //     <div className="card-body d-flex flex-wrap justify-content-center">
    //       <a
    //         href="https://github.com/anabwarsame/read-me-generator"
    //         className="card-link"
    //       >
    //         Github
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card-container" style={{ width: "18rem" }}>
    //     <img
    //       // src={require("../../images/placeholderimg.jpg")}
    //       className="card-img-top"
    //       alt="placeholder img"
    //     />
    //     <div className="card-body">
    //       <h5 className="card-text">Team Profile Generator</h5>
    //       <p className="card-text">
    //         Here the user interacts with the inquirer CLI that generates some
    //         questions and the user inputs their answers. The users response is
    //         then used to generate some HTML cards to represent different types
    //         of employees
    //       </p>
    //     </div>

    //     <div className="card-body d-flex flex-wrap justify-content-center">
    //       <a
    //         href="https://github.com/anabwarsame/Team-profile-generator"
    //         className="card-link"
    //       >
    //         Github
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card-container" style={{ width: "18rem" }}>
    //     <img
    //       // src={require("../../images/placeholderimg.jpg")}
    //       className="card-img-top"
    //       alt="placeholder img"
    //     />
    //     <div className="card-body">
    //       <h5 className="card-text">Note Taker App</h5>
    //       <p className="card-text">
    //         This is an application where the user can add, save and delete notes
    //         from their note taker as they please.
    //       </p>
    //     </div>

    //     <div className="card-body d-flex flex-wrap justify-content-center">
    //       <a
    //         href="https://github.com/anabwarsame/note-taker"
    //         className="card-link"
    //       >
    //         Github
    //       </a>
    //     </div>
    //   </div>
    //   <div className="card-container" style={{ width: "18rem" }}>
    //     <img
    //       // src={require("../../images/placeholderimg.jpg")}
    //       className="card-img-top"
    //       alt="placeholder img"
    //     />
    //     <div className="card-body">
    //       <h5 className="card-text">Tech Blog App</h5>
    //       <p className="card-text">
    //         This is an application where the user can add, save and delete
    //         thoughts from their blog as they please.
    //       </p>
    //     </div>

    //     <div className="card-body d-flex flex-wrap justify-content-center ">
    //       <a
    //         href="https://github.com/anabwarsame/tech-blog-handlebars14"
    //         className="card-link"
    //       >
    //         Github
    //       </a>
    //     </div>
    //   </div>
    // </section>
  );
};
