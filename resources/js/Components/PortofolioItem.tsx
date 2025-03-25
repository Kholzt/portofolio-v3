import React from "react";
import { PortofolioItemProps } from "@/types/all";

interface PortofolioItemComponentProps {
    porto: PortofolioItemProps;
    resultFormatDate: string;
}
export const PortofolioItem: React.FC<PortofolioItemComponentProps> = ({
    porto, resultFormatDate,
}) => (
    <div className="col-lg-4 col-md-6 col-12">
        <article className="border rounded-md overflow-hidden h-full ">
            <img
                src={porto.thumbnail.includes("https") ? porto.thumbnail : `storage/${porto.thumbnail}`}
                className=" aspect-video object-cover object-top"
                alt={porto.title} />
            <div className="p-4">
                <h6 className="text-lg font-medium">{porto.title}</h6>
                <p className="text-sm text-slate-600">{porto.description}</p>
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
                <div className="flex text-sm text-slate-600 mt-2">
                    <i className="fa fa-calendar me-2" />
                    <small>{resultFormatDate}</small>
                </div>
            </div>
        </article>
    </div>
);
