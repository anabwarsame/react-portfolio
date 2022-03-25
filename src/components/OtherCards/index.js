import { Cards } from "../Cards/Cards";

const otherProj = [
  {
    name: "Code Quiz",
    imageUrl: "images/Screenshot 2022-01-31 at 02.54.14.png",
    github: "https://github.com/anabwarsame/Food4u/",
    description:
      "An application where users can upload, edit, delete food posts using its own server-side API, user authentification, and which connects to a database.",
  },
  {
    name: "Day Planner",
    imageUrl: "images/Screenshot 2022-01-22 at 22.21.56.png",
    github: "https://github.com/anabwarsame/Work-Day-Planner",
    description:
      "This is a project containing a work day calendar between the hours  of 9AM-5PM. Its an easy to use calendar where the user can add text at specific hours to plan their day and save it.",
  },
  {
    name: "Day Planner",
    imageUrl: "images/Screenshot 2022-01-22 at 22.21.56.png",
    github: "https://github.com/anabwarsame/Work-Day-Planner",
    description:
      "This is a project containing a work day calendar between the hours  of 9AM-5PM. Its an easy to use calendar where the user can add text at specific hours to plan their day and save it.",
  },
];
const OtherCards = () => {
  return (
    <section className="my-3 d-flex flex-wrap justify-content-around align-items-center">
      {otherProj.map((project) => (
        <Cards project={project} />
      ))}
    </section>
  );
};

export default OtherCards;
