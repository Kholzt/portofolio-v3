import React, { useState, useEffect, useRef } from "react";
import { formatDate } from "../helpers/helpers";
import { Head } from "@inertiajs/react";
import { AchievementProps, LayoutType, PortofolioItemProps } from "@/types/all";
import { User } from "@/types";
import { jsPDF } from "jspdf";
import { PortofolioItem } from "../Components/PortofolioItem";
import { ExperienceItem } from "../Components/ExperienceItem";
import { Achievment } from "../Components/Achievment";
import PrimaryButton from "@/Components/PrimaryButton";

interface PortofolioProps {
    data: {
        portofolio: PortofolioItemProps[];
        user: User;
        achievement: AchievementProps[];
    };
}

const Landing: React.FC<PortofolioProps> = ({ data }) => {
    const { portofolio, user, achievement } = data;
    const [Layout, setLayout] = useState(LayoutType.GRID);
    const [activeSection, setActiveSection] = useState<string | null>("about");
    const circleRef = useRef<HTMLDivElement>(null);
    const baseUrl = window.location.origin;

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["about", "experience", "project", "certificates"];
            let currentSection = "about";

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 500 && rect.bottom >= 500) {
                        currentSection = section;
                        break;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        let mouseX = 0, mouseY = 0;
        let currentX = 0, currentY = 0;
        let isMove = false;
        const aboutSection = document.getElementById("about");
        if (aboutSection && circleRef.current) {
            const rect = aboutSection.getBoundingClientRect();
            const initialX = rect.left + rect.width / 6;
            const initialY = rect.top + rect.height / 4;

            // Set posisi awal elemen circle
            circleRef.current.style.transform = `translate(${initialX}px, ${initialY}px)`;
            currentX = initialX;
            currentY = initialY;
        }
        const handleMove = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            // Cek apakah mouse berada dalam elemen dengan class "hover-area"
            // if (target.closest(".move-circle")) {
                mouseX = e.clientX;
                mouseY = e.clientY;
                isMove = true;
            // }
        };


        const animate = () => {
            if (isMove) {
                currentX += (mouseX - currentX - 100) * 0.1;
                currentY += (mouseY - currentY - 100) * 0.1;
            }

            if (circleRef.current) {
                circleRef.current.style.transform = `translate(${currentX}px, ${currentY}px) `;
            }

            requestAnimationFrame(animate);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("mousemove", handleMove);
        requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);

    return (
        <div className="bg-gray-800 text-white">
        <div className="lines">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
        </div>
            <div ref={circleRef} className="circle bg-green-600 md:w-[20%] w-[50%] translate-x-[50%]  rounded-full fixed aspect-square opacity-50 blur-3xl"></div>

            <Head title="Portofolio" />
            <div className="container">
                <div className={`grid ${Layout === LayoutType.GRID ? "md:grid-cols-8" : "grid-cols-1"}`}>
                    <div className={`transition-all duration-300 ${Layout === LayoutType.GRID ? "md:col-span-2 md:block hidden" : "hidden"}`}>
                        <section className={`md:sticky top-0 left-0 flex items-center ${Layout === LayoutType.GRID ? "md:min-h-[100vh]" : ""} overflow-y-auto snap-y snap-mandatory`}>
                            <ul className="w-full snap-start">
                                {[
                                    { id: "about", label: "About Me" },
                                    { id: "experience", label: "Experience" },
                                    { id: "project", label: "Projects" },
                                    { id: "certificates", label: "Certificates" }
                                ].map(({ id, label }) => (
                                    <li key={id} className={`before:content-[''] move-circle before:absolute before:transition-all before:left-0 before:top-1/2 before:h-1 before:bg-white before:-translate-y-1/2 relative text-base cursor-pointer transition-all duration-300 py-2 w-full snap-start
                                        ${activeSection === id ? "text-white font-bold pl-14 before:w-10 before:duration-500" : "text-slate-400 hover:text-slate-300 before:w-0 before:duration-200"}`}>
                                        <a href={`#${id}`}>
                                        {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className={`${Layout === LayoutType.GRID ? "md:col-span-5 md:col-start-4" : ""} main snap-y snap-mandatory overflow-y-auto`}>
                        <section id="about" className="snap-start">
                            <div className="md:min-h-[70vh] min-h-[50vh] flex items-center">
                                <div>
                                    <h1 className="text-4xl font-medium mb-2 md:text-start text-center move-circle">{user.name}</h1>
                                    <p className="text-base text-slate-400 mb-4 md:text-start text-center md:max-w-[70%] move-circle">{user.biodata?.about_me}</p>
                                </div>
                            </div>
                        </section>

                        <section id="experience" className="snap-start">
                            <div className="container ">
                                <h4 className="font-bold mb-2 text-lg move-circle">Pengalaman Saya</h4>
                                <p className="text-base text-slate-400 move-circle">Inilah beberapa pengalaman saya sebagai web developer</p>
                                <div id="experience-list" className="mt-4 space-y-6 move-circle">
                                    {portofolio.map((porto, index) => (
                                        <ExperienceItem layout={Layout} key={index} porto={porto} resultFormatDate={`${formatDate(porto.start_date)} - ${formatDate(porto.end_date)}`} />
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="project" className="snap-start ">
                            <div className="container">
                                <h4 className="font-bold mb-2 text-lg move-circle">Karya dan Proyek Unggulan</h4>
                                <p className="text-base text-slate-400 move-circle">Inilah beberapa proyek menarik yang telah saya kembangkan:</p>
                                <div id="project-list" className="move-circle">
                                    {portofolio.map((porto, index) => (
                                        <PortofolioItem layout={Layout} key={index} porto={porto} resultFormatDate={`${formatDate(porto.start_date)} - ${formatDate(porto.end_date)}`} />
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="certificates" className="snap-start move-circle">
                            <Achievment achievement={achievement} />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
