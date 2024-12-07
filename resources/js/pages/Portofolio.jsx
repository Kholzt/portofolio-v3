import React from "react";
import { formatDate } from "../helpers/helpers";

const Portofolio = ({ data }) => {
    const { portofolio } = data;
    return (
        <div>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                rel="stylesheet"
            ></link>
            <nav className="navbar navbar-expand-lg bg-white position-fixed w-100 top-0 left-0">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="./logo.svg" alt="" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav ms-auto">
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Projects
                            </a>
                            <a className="nav-link" href="#">
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

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
