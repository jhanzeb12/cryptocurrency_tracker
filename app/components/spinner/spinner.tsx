export type ISpinnerProps = {
    show: boolean;
}
const Spinner = ({ show }: ISpinnerProps) => {
    if (!show) {
        return null;
    }

    return (
        <div className="fixed flex z-[999] w-[100vw] h-[100vh] top-0 left-0 overflow-hidden justify-center items-center bg-[rgba(0,0,0,0.2)]">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
        </div>
    );
}

export default Spinner;