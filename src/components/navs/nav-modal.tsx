import { useLocation } from 'react-router-dom';
import { Menu } from "../items";
import { ButtonProps } from '../../interfaces';
import { ButtonClose } from "../buttons";
import { XCircle } from "@phosphor-icons/react";

export function NavModal({ onClosed }: ButtonProps) {
    const location = useLocation();
    const currentPage = location.pathname;

    // @ts-ignore
    let buttonLabel = "";
    // @ts-ignore
    let buttonHref = "";

    if (currentPage === "/" || currentPage === "/about" || currentPage === "/contact") {
        buttonLabel = "Habilidades";
        buttonHref = "/skills";
    } else if (currentPage === "/skills") {
        buttonLabel = "Projetos";
        buttonHref = "/projects";
    } else if (currentPage === "/projects") {
        buttonLabel = "Contato";
        buttonHref = "/contact";
    };

    const mobile = 'w-64 h-104 top-0 left-0 p-8 gap-4 absolute flex flex-col items-start justfy-start bg-purple-900 bg-cover rounded-lg shadow-2xl';
    const tablet = 'tablet:w-96 tablet:h-172 tablet:p-10 tablet:gap-4';
    const laptop = '';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            <ButtonClose onClick={onClosed}>
                <XCircle weight="fill" />
            </ButtonClose>
            <Menu>
                <Menu.Page href='/' isActive={currentPage === '/'}> Home </Menu.Page>
                <Menu.Page href='/skills' isActive={currentPage === '/skills'}> Skills </Menu.Page>
                <Menu.Page href='/projects' isActive={currentPage === '/projects'}> Projetos </Menu.Page>
                <Menu.Page href='/about' isActive={currentPage === '/about'}> Sobre </Menu.Page>
                <Menu.Page href='/contact' isActive={currentPage === '/contact'}> Contato </Menu.Page>
            </Menu>
        </div>
    );
};