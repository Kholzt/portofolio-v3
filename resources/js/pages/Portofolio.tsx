import React from "react";
import { formatDate } from "../helpers/helpers";
import Navbar from "../components/Navbar";
import PrimaryButton from "@/components/PrimaryButton";
import { Head } from "@inertiajs/react";

interface PortofolioItemProps {
    thumbnail: string;
    title: string;
    description: string;
    technologies: string[];
    created_at: string;
}

interface PortofolioProps {
    data: {
        portofolio: PortofolioItemProps[];
    };
}

const Portofolio: React.FC<PortofolioProps> = ({ data }) => {
    const { portofolio } = data;

    return (
        <div>
            <Head title="Portofolio"></Head>
            <Navbar />

            <section id="hero">
                <div className="container min-h-[70vh] flex items-center">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div>
                            <h1 className="text-4xl font-medium mb-2">
                                Muhammad Nor Kholit
                            </h1>
                            <p className="text-base text-slate-600 mb-4">
                                Saya adalah Junior Programmer dengan pengalaman
                                dalam pengembangan aplikasi web menggunakan
                                JavaScript dan Java. Saya memiliki keterampilan
                                dalam framework seperti React dan Laravel, serta
                                semangat untuk terus belajar dan berkontribusi
                                dalam proyek-proyek inovatif.
                            </p>

                            <div className="mb-4 flex  gap-2">
                                <PrimaryButton
                                    href="download"
                                    className=" md:w-auto w-full justify-center"
                                >
                                    <i className="fa fa-download me-2" />
                                    Dowload CV
                                </PrimaryButton>
                                <PrimaryButton
                                    href="https://github.com/Kholzt"
                                    className=" md:w-auto w-full justify-center"
                                >
                                    <i className="fa-brands fa-github me-2" />{" "}
                                    Repository
                                </PrimaryButton>
                            </div>
                            <div>
                                <h6 className="mb-0">Projek</h6>
                                <h1
                                    className="font-medium text-xl"
                                    id="project-count"
                                >
                                    {portofolio.length}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="projects">
                <div className="container">
                    <div className="d-flex gap-2 align-items-center mb-4">
                        <span className="particle" />
                        <h4 className="inline-block font-bold mb-0 text-lg ">
                            List Projek
                        </h4>
                        <p className="text-base text-slate-600">
                            Daftar Projek yang pernah saya buat
                        </p>
                        <span className="particle" />
                    </div>
                    <div
                        id="project-list"
                        className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1"
                    >
                        {portofolio?.map((porto, index) => {
                            const resultFormatDate = formatDate(
                                porto.created_at
                            );
                            return (
                                <PortofolioItem
                                    key={index}
                                    porto={porto}
                                    resultFormatDate={resultFormatDate}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portofolio;

interface PortofolioItemComponentProps {
    porto: PortofolioItemProps;
    resultFormatDate: string;
}

const PortofolioItem: React.FC<PortofolioItemComponentProps> = ({
    porto,
    resultFormatDate,
}) => (
    <div className="col-lg-4 col-md-6 col-12">
        <article className="border rounded-md overflow-hidden">
            <img
                src={porto.thumbnail}
                className=" aspect-video"
                alt={porto.title}
            />
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
