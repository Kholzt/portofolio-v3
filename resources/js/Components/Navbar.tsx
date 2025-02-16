import { Button } from "@headlessui/react";
import { Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import PrimaryButton from "./PrimaryButton";

interface User {
    name: string;
    email: string;
    // Add more fields as needed based on your user object
}

interface PageProps {
    auth: {
        user: User | null;
    };
}

interface NavbarProps {
    scrolled: boolean;
    user: User | null;
}

interface NavbarMobileProps extends NavbarProps {
    active: boolean;
    setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(false);
    const user = usePage<PageProps | any>()?.props?.auth?.user || null;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.pageYOffset > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Clean up the listener
    }, []);

    return (
        <>
            <NavbarWeb scrolled={scrolled} user={user} />
            <NavbarMobile
                scrolled={scrolled}
                active={active}
                setActive={setActive}
                user={user}
            />
        </>
    );
};

const NavbarMobile: React.FC<NavbarMobileProps> = ({
    scrolled,
    active,
    setActive,
    user,
}) => {
    const baseClass =
        "fixed md:hidden z-10 transition-all duration-300 ease-in-out ";
    const scrolledClass = scrolled
        ? "py-4 bg-white/90 backdrop-blur-sm "
        : "py-12 ";
    const activeClass = active
        ? "top-2 left-2 bottom-2 right-2 rounded-lg h-screen bg-white/90 backdrop-blur-sm "
        : "top-0 left-0 w-full";

    return (
        <header
            className={`${baseClass} ${scrolledClass} ${activeClass} ${
                scrolled || active ? "text-black py-4" : "text-black"
            }`}
        >
            <div className="container flex flex-wrap justify-between">
                <Link className="text-sm font-bold" href={"/"}>
                    KHOLZT
                </Link>
                <button onClick={() => setActive(!active)}>
                    <i className="fa fa-bars"></i>
                </button>
                <nav className={`w-full pt-6 ${active ? "block" : "hidden"}`}>
                    <ul className="flex flex-col gap-6">
                        <li>
                            <Link className="text-sm" href={"/"}>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm" href={"/"}>
                                Produk
                            </Link>
                        </li>
                        <li>
                            {user ? (
                                <PrimaryButton
                                    className="w-full justify-center"
                                    href={route("dashboard")}
                                >
                                    Dashboard
                                </PrimaryButton>
                            ) : (
                                <PrimaryButton
                                    className="w-full justify-center"
                                    href={route("login")}
                                >
                                    Login
                                </PrimaryButton>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

const NavbarWeb: React.FC<NavbarProps> = ({ scrolled, user }) => {
    const baseClass =
        "fixed hidden md:block top-0 z-10 transition-all duration-300 ease-in-out px-4 w-full";
    const scrolledClass = scrolled
        ? "py-4 bg-white/90 backdrop-blur-sm text-black"
        : "py-12 text-black";

    return (
        <header className={`${baseClass} ${scrolledClass}`}>
            <div className="container flex items-center">
                <Link className="text-sm font-bold" href={"/"}>
                    KHOLZT
                </Link>
                <nav className="mx-auto">
                    <ul className="flex gap-10 ">
                        <li>
                            <Link className="text-sm" href={"/"}>
                                Beranda
                            </Link>
                        </li>
                        <li>
                            <Link className="text-sm" href={"/"}>
                                Produk
                            </Link>
                        </li>
                    </ul>
                </nav>
                {user ? (
                    <PrimaryButton href={route("dashboard")}>
                        Dashboard
                    </PrimaryButton>
                ) : (
                    <PrimaryButton href={route("login")}>Login</PrimaryButton>
                )}
            </div>
        </header>
    );
};

export default Navbar;
