/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */



import ProjectCard from "./ProjectCard";

const Work = () => {
  const projects = [
    {
      imgSrc: "/images/project1.png",
      title: "E-commerce Website",
      techIcons: [
        "/images/react.svg",
        "/images/tailwindcss-icon.svg",
        "/images/nodejs.svg",
      ],
      projectLink: "https://ecommerce-example.com",
      githubLink: "https://github.com/username/ecommerce",
    },
    {
      imgSrc: "/images/project2.png",
      title: "Social Media App",
      techIcons: [
        "/images/react.svg",
        "/images/firebase-icon.svg",
        "/images/material-ui.svg",
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
    <section id="portfolio" className="container py-10">
      <h2 className="text-3xl font-bold text-white mb-8">Portfolio</h2>
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
    </section>
  );
};

export default Work;
