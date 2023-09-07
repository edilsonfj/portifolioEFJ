import { ChildrenProps, ButtonProps } from "../../interfaces";

export function ButtonClose({ children, onClick }: ChildrenProps & ButtonProps) {

    const mobile = 'text-4xl text-purple-50 hover:text-purple-600 focus:text-purple-600 transition duration-500 ease-in-out';
    const tablet = 'tablet:text-5xl';
    const laptop = '';
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