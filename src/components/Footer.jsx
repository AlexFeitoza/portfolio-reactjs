/**
 * @copyright 2024 codewithsadee
 * @license Apache-2.0
 */



import { ButtonPrimary } from "./Button";

const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'Sobre',
        href: '#about'
    },
    {
        label: 'Portfolio',
        href: '#portfolio'
    },
    {
        label: 'Contato',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/AlexFeitoza'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/alex-feitozaa/'
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/alex_feitoza/'
    },
    
];


const Footer = () => {
    return (
        <footer className="section">
            <div className="container">

                <div className="lg:grid lg:grid-cols-2 ">

                    
                        <div className="mb-10">
                            <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            Vamos trabalhar juntos hoje!
                            </h2>

                            <ButtonPrimary
                                href="mailto:alexfeitoza.dev@gmail.com"
                                label="Iniciar Projeto"
                                icon="chevron_right"
                            />
                        </div>
                    

                    <div className="grid grid-cols-2 gap-4 lg:pl-20">

                        <div>
                            <p className="mb-2">Mapa do site</p>

                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 "
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2 ">Socials</p>

                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>

                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a 
                    href=""
                    className=""
                    >
                        <img 
                            src="/images/logo-ultimate.svg"
                            width={40}
                            height={40} 
                            alt="Logo" 
                        />
                    </a>

                    <p className="text-zinc-500 text-sm ">
                        &copy; 2025 <span className="text-zinc-200">alexfeitozadev@gmail.com</span>
                    </p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
