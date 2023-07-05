import { IVariants } from "~/types/types";
import cn from "classnames";
import React from "react";

export type IInputProps = {
    variant?: IVariants;
    handleInput?: (e: any) => void;
} & React.InputHTMLAttributes<"input">;


const Input = React.forwardRef((props: IInputProps, ref) => {
    const _classes = cn([
        "input input-bordered input-primary w-full max-w-xs",
        props.className ?? ''
    ])
    return (
        <input
            type={props.type}
            ref={ref}
            placeholder={props.placeholder}
            onInput={(e) => props.handleInput?.(e)}
            className={_classes} />
    );
})

Input.defaultProps = {
    type: 'text',
    placeholder: '',
    variant: 'neutral',
}

export default Input;