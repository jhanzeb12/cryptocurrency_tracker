import { MouseEvent } from "react";
import { ITextProps, IVariants } from "~/types/types";

export type IHrefProps = {
    onClick?: (event: MouseEvent) => void;
    href?: string;
    variant?: IVariants;
} & ITextProps;

const HrefLink = ({ text, href, onClick, variant }: IHrefProps) => {
    return (
        <a
            className={"link " + variant}
            href={href}
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();

                onClick?.(e);
            }}
        > {text}</a>
    );
}

HrefLink.defaultProps = {
    onClick: null,
    href: '',
    text: '',
    variant: ''
}

export default HrefLink;