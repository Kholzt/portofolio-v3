import React from "react";
import { LayoutType, PortofolioItemProps } from "@/types/all";

interface PortofolioItemComponentProps {
    porto: PortofolioItemProps;
    resultFormatDate: string;
}
export const ExperienceItem: React.FC<PortofolioItemComponentProps> = ({
    porto, resultFormatDate,
}) => (
    <div className={` transition-all  duration-500 hover:sbackdrop-blur-xl p-4 rounded-sm `}>
        <article className=" rounded-md overflow-hidden h-full md:flex">
            {/* <img
            src={porto.thumbnail.includes("https") ? porto.thumbnail : `storage/${porto.thumbnail}`}
            className=" aspect-video object-cover object-top"
            alt={porto.title} /> */}
            <div className="flex text-base  min-w-[300px] md:py-4">
                <i className="fa fa-calendar me-2" />
                <small>{resultFormatDate}</small>
            </div>
            <div className="md:px-4 py-2">
                <h6 className="text-lg font-medium mb-2">{porto.title}</h6>
                <p className="text-sm text-slate-400 prose" dangerouslySetInnerHTML={{ __html: porto.details }}></p>
                <div>
                    <ul className="flex gap-2 unstyled">
                        {porto?.technologies?.map((tech, index) => (
                            <li key={index}>
                                <span className="badge text-bg-dark fw-medium">
                                    {tech}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </article>
    </div>
);
