import React from "react";
import { formatDate } from "../helpers/helpers";
import Navbar from "../components/Navbar";

const Portofolio = ({ data }) => {
    const { portofolio } = data;
    return (
        <div>
     
           <Navbar/>

                <section id="hero" className="mb-4">
                    <div className="container ">
                        <div
                            className="grid md:grid-cols-2 grid-cols-1 min-h-[70vh]"
                        >
                            <div className="">
                                <h1>Muhammad Nor Kholit</h1>
                                <p>
                                    Saya adalah Junior Programmer dengan
                                    pengalaman dalam pengembangan aplikasi web
                                    menggunakan JavaScript dan Java. Saya
                                    memiliki keterampilan dalam framework
                                    seperti React dan Laravel, serta semangat
                                    untuk terus belajar dan berkontribusi dalam
                                    proyek-proyek inovatif.
                                </p>
                                <button className="btn btn-dark mb-4 me-2">
                                    <i className="fa fa-download" /> Download CV
                                </button>
                                <a
                                    href="https://github.com/Kholzt"
                                    className="btn btn-outline-dark mb-4"
                                >
                                    <i className="fa-brands fa-github" />{" "}
                                    Repository
                                </a>
                                <div className="">
                                    <h6 className="mb-0 ">Project</h6>
                                    <h1
                                        className="fw-medium "
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
                            <h4 className="d-inline-block mb-0  fw-normal">
                                Projects
                            </h4>
                            <span className="particle" />
                        </div>
                        <div id="project-list" className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 g-4">
                            {portofolio?.map((porto, index) => {
                                const resultFormatDate = formatDate(
                                    porto.created_at
                                );
                                return (
                                    PortofolioItem(index, porto, resultFormatDate)
                                );
                            })}
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default Portofolio;

function PortofolioItem(index, porto, resultFormatDate) {
    return <div
        key={index}
        className="col-lg-4 col-md-6 col-12"
    >
        <article className="border rounded-md overflow-hidden">
            <img
                src={porto.thumbnail}
                className="img-fluid ratio ratio-16x9"
                alt={porto.title} />
            <div className="p-3">
                <h6 className="text-lg font-medium">
                    {porto.title}
                </h6>
                <p>{porto.description}</p>
                <div>
                    <ul className="flex gap-2 unstyled">
                        {porto?.technologies
                            ?.map(
                                (tech) => `
                                                        <li>
                                                            <span className="badge text-bg-dark fw-medium">
                                                                ${"{"}tech{"}"}
                                                            </span>
                                                        </li>
                                                        `
                            )
                            .join("")}
                    </ul>
                </div>
                <div className="flex">
                    <div>
                        <i className="fa fa-calendar text-secondary me-2" />

                        <small>
                            {resultFormatDate}
                        </small>
                    </div>
                </div>
            </div>
        </article>
    </div>;
}

