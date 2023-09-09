import { ChildrenProps, ButtonProps } from "../../interfaces";

export function ButtonClose({ children, onClick }: ChildrenProps & ButtonProps) {

    const mobile = 'text-3xl text-slate-100 hover:text-white focus:text-white transition duration-500 ease-in-out';
    const tablet = 'tablet:text-4xl';
    const laptop = 'laptop:hidden';
    const notebook = '';
    const desktop = '';
    const monitor = '';
    const tv = '';
    const scale = '';
    const screen = '';

    return (
        <button onClick={onClick} className={`${mobile} ${tablet} ${laptop} ${notebook} ${monitor} ${tv} ${desktop} ${scale} ${screen}`}>
            {children}
        </button>
    );
};