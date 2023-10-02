import { Job, Name, Text } from './items';
import { ButtonProject } from './buttons';

export function Description() {

    const mobile = 'w-full h-max py-28 px-8 gap-4 flex flex-col items-start justify-start';
    const tablet = 'tablet:py-36 tablet:px-12 tablet:gap-6';
    const laptop = 'laptop:w-[45%] laptop:h-full laptop:py-16 laptop:px-8 laptop:gap-4';
    const notebook = 'notebook:py-20 notebook:px-10 notebook:gap-5';
    const desktop = 'desktop:py-26 desktop:px-12 desktop:gap-6';
    const monitor = 'monitor:py-30 monitor:px-14 monitor:gap-7';
    const tv = 'tv:py-34 tv:px-16 tv:gap-8';
    const scale = 'scale:py-40 scale:px-20 scale:gap-9';
    const screen = 'screen:py-44 screen:px-22 screen:gap-10';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            <Job>
                <Name>
                    <Name.Tracer />
                    <Name.Text color="text-slate-300">
                        Edilson de Freitas Júnior
                    </Name.Text>
                </Name>
                <Job.Profission>Desenvolvedor</Job.Profission>
                <Job.Area>Full-stack</Job.Area>
            </Job>
            <Text>
                Desenvolvimento de soluções em TI através
                de softwares, web interfaces e aplicações,
                por meio de novas tendências de
                tecnologias e as mais inovadoras
                linguagens em suas soluções.
                <ButtonProject href="/projects">
                    Veja meus projetos!
                </ButtonProject>
            </Text>
        </div>
    );
};