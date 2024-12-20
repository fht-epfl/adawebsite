import { FaGithub } from "react-icons/fa";

const githubLinks = [
    { href: "https://github.com/epfl-ada/ada-2024-project-tada2024", name: "tADA2024" },
    { href: "https://github.com/fht-epfl", name: "Haotian Fang" },
    { href: "https://github.com/SRAGU0904", name: "Ruyin Feng" },
    { href: "https://github.com/ncstaran", name: "Nastaran Hashemi" },
    { href: "https://github.com/SRAGU0904", name: "Nathanael Lambert" },
    { href: "https://github.com/alunxu", name: "Weilun Xu" },
];

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5D9CEC] py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm font-light md:text-left">
                    ©Team tADA2024
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {githubLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {index === 0 && <FaGithub className="mr-2" />} {link.name}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
