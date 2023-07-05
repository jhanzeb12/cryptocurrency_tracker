import { ITextProps } from "~/types/types";

const Divider = ({ text }: ITextProps) => (<div className="divider float-none clear-both">{text}</div>);

Divider.defaultProps = {
    text: '',
}

export default Divider;