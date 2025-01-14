/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "/images/projeto-usuarios.png",
    title: "Cadastro de Usuários",
    imgTags: [
      "/images/react.svg",
      "/images/styledcomponents-icon.svg",
      "/images/nodejs.svg",
      "images/mongodb-icon.svg",
      "/images/prisma-icon.svg",
    ],
    projectLink: "https://github.com/AlexFeitoza/devclub-usuarios",
  },
  {
    imgSrc: "/images/project-2.jpg",
    title: "Free stock photo app",
    imgTags: ["/images/html5.svg", "/images/css3-icon.svg", "/images/javascript-icon.svg", "/images/git-logo.svg"],
    projectLink: "https://pixstock-official.vercel.app/",
    githubLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-3.jpg",
    title: "Recipe app",
    imgTags: ["Development", "API"],
    projectLink: "",
    githubLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-4.jpg",
    title: "Real state website",
    imgTags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee-org/wealthome",
  },
  {
    imgSrc: "/images/conversor-moedas.png",
    title: "Conversor de Moedas",
    imgTags: ["/images/html5.svg", "/images/css3-icon.svg", "/images/javascript-icon.svg",],
    projectLink: "https://github.com/codewithsadee/anon-ecommerce-website",
    githubLink: "https://musify-5al0.onrender.com/",
  },
  {
    imgSrc: "/images/project-6.jpg",
    title: "vCard Personal portfolio",
    imgTags: ["Web-design", "Development"],
    projectLink: "https://github.com/codewithsadee/vcard-personal-portfolio",
    githubLink: "https://musify-5al0.onrender.com/",
  },
];

const Work = () => {
  return (
    <section id="work" className="">
      <div className="container">
        <h2 className="headline-2 mb-8 mt-10 ">Portfolio</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, imgTags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              imgTags={imgTags}
              projectLink={projectLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
