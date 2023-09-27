export function TreeBg() {

    const mobile = 'w-[45%] h-screen hidden -z-50 right-0 bg-treeBg bg-cover';
    const tablet = '';
    const laptop = 'laptop:fixed laptop:flex';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <div className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}></div>
    );
};