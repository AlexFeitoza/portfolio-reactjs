/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const Work = () => {
  const projects = [
    {
      imgSrc: "/images/portfolio-port.png",
      title: "Portfolio",
      techIcons: [
        "/images/react.svg",
        "/images/nodejs.svg",
        "/images/tailwindcss.svg",
      ],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/AlexFeitoza/portfolio-reactjs",
    },
    {
      imgSrc: "/images/api-backend.png",
      title: "Api (CRUD)",
      techIcons: [
        "/images/react.svg",
        "/images/mongodb-icon.svg",
        "/images/nodejs.svg",
        "/images/prisma-icon.svg",
      ],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/username/ecommerce",
    },
    {
      imgSrc: "/images/projeto-usuarios.png",
      title: "Cadastro de Usuários",
      techIcons: [
        "/images/react.svg",
        "/images/nodejs.svg",
        "/images/mongodb-icon.svg",
        "/images/styledcomponents-icon.svg",
      ],
      projectLink: "https://socialmedia-example.com",
      githubLink: "https://github.com/username/socialmedia",
    },
    {
      imgSrc: "/images/conversor-moedas.png",
      title: "Conversor de Moedas",
      techIcons: [
        "/images/html5.svg",
        "/images/css3-icon.svg",
        "/images/javascript-icon.svg",
      ],
      projectLink: "https://alexfeitoza.github.io/conversor-de-moedas/",
      githubLink: "https://github.com/AlexFeitoza/conversor-de-moedas",
    },
  ];

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <h2 className="headline-2 mb-7">Portfolio</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              imgSrc={project.imgSrc}
              title={project.title}
              techIcons={project.techIcons}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
