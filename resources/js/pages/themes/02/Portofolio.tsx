import React, { useState, useEffect, useRef } from "react";
import { formatDate } from "../../../helpers/helpers";
import { Head } from "@inertiajs/react";
import { AchievementProps, LayoutType, PortofolioItemProps } from "@/types/all";
import { User } from "@/types";
import { jsPDF } from "jspdf";
import { PortofolioItem } from "./PortofolioItem";
import { ExperienceItem } from "./ExperienceItem";
import { Achievment } from "./Achievment";

interface PortofolioProps {
    data: {
        portofolio: PortofolioItemProps[];
        experience: PortofolioItemProps[];
        user: User;
        achievement: AchievementProps[];
    };
}

const Theme2: React.FC<PortofolioProps> = ({ data }) => {
    const { portofolio, user, achievement, experience } = data;

    return (
        <div className="bg-white text-gray-600">

            <Head title="Portofolio" />
            <div className="container">
                <div className={``}>
                    <div className={` main snap-y snap-mandatory overflow-y-auto`}>
                        <section id="about" className="snap-start">
                            <div className="md:min-h-[70vh] min-h-[50vh] flex items-center">
                                <div>
                                    <h1 className="text-4xl font-medium mb-2 md:text-start text-center move-circle">{user.name}</h1>
                                    <p className="text-base  mb-4 md:text-start text-center md:max-w-[70%] move-circle" dangerouslySetInnerHTML={{ __html: user.biodata?.about_me ?? "" }}></p>
                                </div>
                            </div>
                        </section>

                        <section id="experience" className="snap-start">
                            <div className="container ">
                                <h4 className="font-bold mb-2 text-lg move-circle">Pengalaman Saya</h4>
                                <p className="text-base  move-circle">Inilah beberapa pengalaman saya sebagai web developer</p>
                                <div id="experience-list" className="mt-4 space-y-6 move-circle">
                                    {experience.map((porto, index) => (
                                        <ExperienceItem key={index} porto={porto} resultFormatDate={`${formatDate(porto.start_date)} - ${formatDate(porto.end_date)}`} />
                                    ))}
                                </div>
                            </div>
                        </section>

                        <section id="project" className="snap-start ">
                            <div className="container">
                                <h4 className="font-bold mb-2 text-lg move-circle">Karya dan Proyek Unggulan</h4>
                                <p className="text-base  move-circle">Inilah beberapa proyek menarik yang telah saya kembangkan:</p>
                                <div id="project-list" className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-4 gap-2">
                                    {portofolio.map((porto, index) => (
                                        <PortofolioItem key={index} porto={porto} resultFormatDate={`${formatDate(porto.start_date)} - ${formatDate(porto.end_date)}`} />
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

export default Theme2;
