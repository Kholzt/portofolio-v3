


import React from "react";
import { LayoutType, PortofolioItemProps } from "@/types/all";

interface PortofolioItemComponentProps {
    porto: PortofolioItemProps;
    resultFormatDate: string;
    layout: LayoutType
}
export const PortofolioItem: React.FC<PortofolioItemComponentProps> = ({
    porto, resultFormatDate, layout
}) => (
    <div>
        <article className={`rounded-md overflow-hidden group h-full ${layout == LayoutType.GRID && "md:flex"}`}>

            <div className={` ${layout == LayoutType.GRID && "min-w-[300px] md:max-w-[300px]"}`}>
                <div className="flex text-base text-slate-200   py-4">
                    <i className="fa fa-calendar me-2" />
                    <small>{resultFormatDate}</small>
                </div>
                <img
                    src={porto.thumbnail.includes("https") ? porto.thumbnail : `storage/${porto.thumbnail}`}
                    className=" aspect-video object-cover object-top w-full rounded mx-auto md:grayscale group-hover:grayscale-0 transition-all ease-in-out"
                    alt={porto.title} />
            </div>
            <div className={`${layout == LayoutType.GRID ? "md:px-4 py-4" : "py-4"} `}>
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
