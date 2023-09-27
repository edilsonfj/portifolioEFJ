import { useLocation } from 'react-router-dom';
import { Menu } from '../items';

export function NavBar() {

    const location = useLocation();
    const currentPage = location.pathname;

    const mobile = 'w-[10%] h-full hidden flex-col items-center justify-center border-r border-purple-50/10';
    const tablet = 'tablet:';
    const laptop = 'laptop:flex laptop:pt-24';
    const notebook = 'notebook:pt-30';
    const desktop = 'desktop:pt-36';
    const monitor = 'monitor:pt-42';
    const tv = 'tv:pt-48';
    const scale = 'scale:pt-54';
    const screen = 'screen:pt-60';

    return (
        <nav className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            <Menu>
                <Menu.Page href='/' isActive={currentPage === '/'}> Home </Menu.Page>
                <Menu.Page href='/skills' isActive={currentPage === '/skills'}> Skills </Menu.Page>
                <Menu.Page href='/projects' isActive={currentPage === '/projects'}> Projetos </Menu.Page>
                <Menu.Page href='/about' isActive={currentPage === '/about'}> Sobre </Menu.Page>
                <Menu.Page href='/contact' isActive={currentPage === '/contact'}> Contato </Menu.Page>
            </Menu>
        </nav>
    );
};

