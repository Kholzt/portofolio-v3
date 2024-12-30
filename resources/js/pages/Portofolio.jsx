import React from "react";
import { formatDate } from "../helpers/helpers";
import Navbar from "../components/Navbar";

const Portofolio = ({ data }) => {
    const { portofolio } = data;
    return (
        <div>
     
           <Navbar/>

            <>
                <section id="hero" className="mb-4">
                    <div className="container ">
                        <div
                            className="row  align-items-md-end align-items-center"
                            style={{ height: "70vh" }}
                        >
                            <div className="col-md-6 col-12">
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
                        <div id="project-list" className="row g-4">
                            {portofolio?.map((porto, index) => {
                                const resultFormatDate = formatDate(
                                    porto.created_at
                                );
                                return (
                                    <div
                                        key={index}
                                        className="col-lg-4 col-md-6 col-12"
                                    >
                                        <article className="border rounded-1 overflow-hidden">
                                            <img
                                                src={porto.thumbnail}
                                                className="img-fluid ratio ratio-16x9"
                                                alt={porto.title}
                                            />
                                            <div className="p-3">
                                                <h6 className="fs-5 fw-medium">
                                                    {porto.title}
                                                </h6>
                                                <p>{porto.description}</p>
                                                <div>
                                                    <ul className="d-flex gap-2 list-unstyled">
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
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </>

            <script
                src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                crossorigin="anonymous"
            ></script>
        </div>
    );
};

export default Portofolio;
