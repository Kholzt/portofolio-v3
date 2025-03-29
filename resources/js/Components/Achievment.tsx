import React from "react";
import { AchievementProps } from "@/types/all";

export function Achievment({achievement}:{achievement: AchievementProps[]}) {
    return <section id="achievement">
        <div className="container">
            <div className="d-flex gap-2 align-items-center mb-4">
                <span className="particle" />
                <h4 className="inline-block font-bold mb-0 text-lg ">
                    Sertifikat/ Penghargaan
                </h4>
                <p className="text-base text-slate-400">
                    Inilah beberapa penghargaan/sertifikat yang telah saya
                    dapatkan:
                </p>
                <span className="particle" />
            </div>
            <div
                id="achievement-list"
                className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1"
            >
                {achievement?.map((achi, index) => {
                    return (
                        <article key={index} className="relative border group rounded-md overflow-hidden h-full">
                            <figure className="w-full">
                                <img
                                    src={achi.attachment1}
                                    className="aspect-video object-cover object-top w-full"
                                    alt={achi.title} />
                            </figure>
                            <div className="absolute bottom-[-100%] group-hover:bottom-0 transition-all  left-0 w-full bg-black group-hover:bg-opacity-50 bg-opacity-0 text-white p-4">
                                <h6 className="text-lg font-medium">{achi.title}</h6>
                            </div>
                        </article>
                    );
                })}
            </div>
        </div>
    </section>;
}
