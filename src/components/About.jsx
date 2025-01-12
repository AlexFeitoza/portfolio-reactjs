/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */



const aboutItems = [
    {
        label: 'Projetos Concluídos',
        number: 10 
    },
    {
        label: 'Ano de Experiência',
        number: 1
    }
];

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">

                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
                    <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]"> 
                    Construindo Websites Modernos e Escaláveis para o Futuro
                    Bem-vindo! Eu sou Alex, um desenvolvedor Full Stack com talento para criar sites visualmente impressionantes e altamente funcionais. Combinando criatividade e expertise técnica, transformo sua visão em uma obra-prima digital que se destaca tanto em aparência quanto em desempenho.
                    </p>

                    <div className=" flex flex-wrap items-center gap-4 md:gap-7">
                        {
                            aboutItems.map(({ label, number }, key) => (
                                <div key={key}>
                                    <div className="flex items-center md:mb-2">
                                        <span className="text-2xl font-semibold md:text-4xl">
                                            {number}</span>
                                        <span className="text-sky-400 font-semibold md:text-3xl">
                                            +
                                        </span>
                                    </div>

                                    <p className="text-sm text-zinc-400">{label}</p>
                                </div>
                            ))
                        }

                        <img 
                        src="/images/logo.svg" 
                        alt="Logo"
                        width={30}
                        height={30} 
                        className="ml-auto md:w-[40px] md:h-[40px] "/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
