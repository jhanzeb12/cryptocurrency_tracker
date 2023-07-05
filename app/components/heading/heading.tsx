import { ITextProps } from "~/types/types";

export type IHeadingProps = {
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & ITextProps;

const Heading = ({ variant, text }: IHeadingProps) => {
    // this if is not required but TSC complains so added it.
    if (!variant) variant = "h1";

    const headings = {
        h1: <h1 className="text-3xl">{text}</h1>,
        h2: <h2 className="text-2xl">{text}</h2>,
        h3: <h3 className="text-xl">{text}</h3>,
        h4: <h4 className="text-lg">{text}</h4>,
        h5: <h5 className="text-base">{text}</h5>,
        h6: <h6 className="text-sm">{text}</h6>,
    };

    return headings[variant]
}

Heading.defaultProps = {
    variant: 'h1',
    text: ''
}

export default Heading;