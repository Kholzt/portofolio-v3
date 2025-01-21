import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type PrimaryButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href?: string;
    };

export default function PrimaryButton({
    className = "",
    disabled,
    children,
    href,
    ...props
}: PrimaryButtonProps) {
    const commonClasses =
        "inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-gray-700 focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-gray-900";

    const combinedClassName = `${commonClasses} ${
        disabled ? "opacity-25" : ""
    } ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={combinedClassName}
                {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={combinedClassName}
            disabled={disabled}
            {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
        >
            {children}
        </button>
    );
}
