import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Logo, Contact } from './items';
import { BoxTop } from './boxs'
import { NavModal } from './navs'
import { ButtonMenu, ButtonTop } from './buttons';
import { House, WhatsappLogo, EnvelopeSimple } from "@phosphor-icons/react";

export function Header() {

    const location = useLocation();
    const currentPage = location.pathname;

    let buttonLabel = "";
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
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const mobile = 'w-full h-[10%] top-0 fixed z-50 flex flex-row items-center justify-center  border-b border-purple-50/10 bg-bg';
    const tablet = '';
    const laptop = '';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <header className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            <ButtonMenu onClick={handleOpenModal}>
                <House weight="fill" />
            </ButtonMenu>
            <Logo href='/'>
                edilsonfj
            </Logo>
            <BoxTop>
                <Contact>
                    <Contact.Root href="https://contate.me/efjdev">
                        <Contact.Icon>
                            <WhatsappLogo />
                        </Contact.Icon>
                        <Contact.Label>
                            +55 (34) 9 9960-8396
                        </Contact.Label>
                    </Contact.Root>
                    <Contact.Root href="mailto:edilson.desenvolved@gmail.com">
                        <Contact.Icon>
                            <EnvelopeSimple />
                        </Contact.Icon>
                        <Contact.Label>
                            edilson.desenvolved@gmail.com
                        </Contact.Label>
                    </Contact.Root>
                </Contact>
                <ButtonTop href={buttonHref} isActive={currentPage === '/skills' || currentPage === '/projects'}>
                    {buttonLabel}
                </ButtonTop>
            </BoxTop>
            {isModalOpen && (
                <NavModal onClosed={handleCloseModal} />
            )}
        </header>
    );
};
