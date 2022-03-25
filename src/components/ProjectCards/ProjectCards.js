import MainCard from "../Maincard";

const mainProj = [
  {
    name: "Food4U",
    imageUrl: "images/Screenshot 2022-01-31 at 02.54.14.png",
    github: "https://github.com/anabwarsame/Food4u/",
    description:
      "An application where users can upload, edit, delete food posts using its own server-side API, user authentification, and which connects to a database.",
  },
  {
    name: "Foodtopia",
    imageUrl: "images/Screenshot 2022-01-22 at 22.21.56.png",
    github: "https://github.com/anabwarsame/Foodtopia",
    description:
      "This is a food recipe app which caters to all food intolerance's whereby a user can filter to their dietary needs and render recipe cards.",
  },
];

export const ProjectCards = () => {
  return (
    <section className="d-flex flex-wrap justify-content-center align-items-center mt-5">
      {mainProj.map((project) => (
        <MainCard project={project} />
      ))}
    </section>
  );
};
