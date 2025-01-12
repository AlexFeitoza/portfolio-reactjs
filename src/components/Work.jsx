/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */


import ProjectCard from "./ProjectCard";

const works = [
    {
      imgSrc: '/images/projeto-usuarios.png',
      title: 'Cadastro de Usuários FullStack',
      imgTags: ['/images/react.svg'],
      projectLink: 'https://musify-5al0.onrender.com/'
    },
    {
      imgSrc: '/images/project-2.jpg',
      title: 'Free stock photo app',
      tags: ['API', 'SPA'],
      projectLink: 'https://pixstock-official.vercel.app/'
    },
    {
      imgSrc: '/images/project-3.jpg',
      title: 'Recipe app',
      tags: ['Development', 'API'],
      projectLink: ''
    },
    {
      imgSrc: '/images/project-4.jpg',
      title: 'Real state website',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee-org/wealthome'
    },
    {
      imgSrc: '/images/project-5.jpg',
      title: 'eCommerce website',
      tags: ['eCommerce', 'Development'],
      projectLink: 'https://github.com/codewithsadee/anon-ecommerce-website'
    },
    {
      imgSrc: '/images/project-6.jpg',
      title: 'vCard Personal portfolio',
      tags: ['Web-design', 'Development'],
      projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
    },
  ];

const Work = () => {
  return (
    <section id="work" className="">

        <div className="container">

            <h2 className="headline-2 mb-8 mt-10 ">
                Portfolio
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                {works.map(({imgSrc, title, imgTags, projectLink }, key) => (
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
  )
}

export default Work
