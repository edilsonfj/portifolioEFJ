import { Header, BoxContent, NavBar, KnowHow } from '../components';

export function Skills() {

    const mobile = 'w-screen h-screen flex flex-col items-center justify-center';
    const tablet = '';
    const laptop = '';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            <Header />
            <BoxContent>
                <NavBar />
                <KnowHow />
            </BoxContent>
        </div>
    );
};