import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type DangerButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        href?: string;
    };

export default function DangerButton({
    className = "",
    disabled,
    children,
    href,
    ...props
}: DangerButtonProps) {
    const commonClasses =
        "inline-flex items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-white transition duration-150 ease-in-out hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 active:bg-red-700";

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
