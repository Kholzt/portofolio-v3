import React from "react";
import { formatDate } from "../helpers/helpers";
import Navbar from "../Components/Navbar";
import PrimaryButton from "@/Components/PrimaryButton";
import { Head, usePage } from "@inertiajs/react";
import { AchievementProps, BiodataProps, PortofolioItemProps } from "@/types/all";
import { User } from "@/types";
import { jsPDF } from "jspdf";

interface PortofolioProps {
    data: {
        portofolio: PortofolioItemProps[];
        user: User;
        achievement:AchievementProps[]
    };
}

const Portofolio: React.FC<PortofolioProps> = ({ data }) => {
    const { portofolio, user ,achievement} = data;
    const baseUrl = window.location.origin;

    const handleExportFromURL = async () => {
        const url = `${baseUrl}/cv`; // Ganti dengan halaman lain yang ingin diekspor
        const pdf = new jsPDF();

        try {
            const response = await fetch(url);
            const html = await response.text();

            pdf.text(html, 10, 10);
            pdf.save("Muhammad Nor Kholit CV.pdf");
        } catch (error) {
            console.error("Gagal mengambil halaman:", error);
        }
    };
    return (
        <div>
            <Head title="Portofolio"></Head>
            <Navbar />
            <section id="hero">
                <div className="container min-h-[70vh] flex items-center">
                    <div className="grid md:grid-cols-2 grid-cols-1">
                        <div>
                            <h1 className="text-4xl font-medium mb-2  md:text-start text-center">
                                {user.name}
                            </h1>
                            <p className="text-base text-slate-600 mb-4 md:text-start text-center">
                                {user.biodata?.about_me}
                            </p>

                            <div className="mb-4 flex  gap-2">
                                <PrimaryButton
                                    onClick={handleExportFromURL}
                                    className=" md:w-auto w-full justify-center"
                                >
                                    <i className="fa fa-download me-2" />
                                    Dowload CV
                                </PrimaryButton>
                                <PrimaryButton
                                    href={user.biodata.github}
                                    className=" md:w-auto w-full justify-center"
                                >
                                    <i className="fa-brands fa-github me-2" />{" "}
                                    Repository
                                </PrimaryButton>
                            </div>
                            <div className="flex gap-4">
                                <div>
                                    <h6 className="mb-0">Projek</h6>
                                    <h1
                                        className="font-medium text-xl"
                                        id="project-count"
                                    >
                                        {portofolio.length}
                                    </h1>
                                </div>
                                <div>
                                    <h6 className="mb-0">Produk</h6>
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
                </div>
            </section>
            <section id="projects">
                <div className="container">
                    <div className="d-flex gap-2 align-items-center mb-4">
                        <span className="particle" />
                        <h4 className="inline-block font-bold mb-0 text-lg ">
                            Karya dan Proyek Unggulan
                        </h4>
                        <p className="text-base text-slate-600">
                            Inilah beberapa proyek menarik yang telah saya
                            kembangkan:{" "}
                        </p>
                        <span className="particle" />
                    </div>
                    <div
                        id="project-list"
                        className="grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1"
                    >
                        {portofolio?.map((porto, index) => {
                            const startDate = formatDate(porto.start_date);
                            const endDate = formatDate(porto.end_date);
                            return (
                                <PortofolioItem
                                    key={index}
                                    porto={porto}
                                    resultFormatDate={`${startDate} - ${endDate}`}
                                />
                            );
                        })}
                    </div>
                </div>
            </section>
            {Achievment(achievement)}
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
        <article className="border rounded-md overflow-hidden h-full ">
            <img
                src={porto.thumbnail}
                className=" aspect-video object-cover object-top"
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
function Achievment(achievement: AchievementProps[]) {
    return <section id="achievement">
        <div className="container">
            <div className="d-flex gap-2 align-items-center mb-4">
                <span className="particle" />
                <h4 className="inline-block font-bold mb-0 text-lg ">
                    Sertifikat/ Penghargaan
                </h4>
                <p className="text-base text-slate-600">
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
