/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */

import Skillcard from "./Skillcard";

const skillItem = [
  {
    imgSrc: "/images/git-logo.svg",
    label: "Git",
    desc: "Versionamento de Código",
  },
  {
    imgSrc: "/images/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/images/javascript.svg",
    label: "JavaScript",
    desc: "Interação",
  },
  {
    imgSrc: "/images/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/images/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/images/mongodb-icon.svg",
    label: "MongoDB",
    desc: "Banco de Dados",
  },
  {
    imgSrc: "/images/react.svg",
    label: "ReactJS",
    desc: "Framework",
  },
  {
    imgSrc: "/images/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },

  {
    imgSrc: "/images/prisma-icon.svg",
    label: "Prisma",
    desc: "ORM",
  },
  {
    imgSrc: "/images/styledcomponents-icon.svg",
    label: "Styled Components",
    desc: "User Interface",
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="headline-2 ">Tecnologias e Ferramentas</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          Ferramentas e tecnologias que utilizo para criar sites e aplicativos excepcionais e de alto desempenho.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <Skillcard key={key} imgSrc={imgSrc} label={label} desc={desc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
