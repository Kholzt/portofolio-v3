import { formatDate } from "@/helpers/helpers";
import { User } from "@/types";
import { PortofolioItemProps } from "@/types/all";
import { Head } from "@inertiajs/react";
import React from "react";
interface CvProps {
    data: {
        portofolio: PortofolioItemProps[];
        user: User;
    };
}
const CV: React.FC<CvProps> = ({ data }) => {
    const { portofolio, user } = data;
    return (
        <div className="p-6">
            <Head title="CV" />
            <center>
                <h1 className="text-2xl font-bold text-[18px]">
                    {data.user.name}
                </h1>
                <div className="inline-flex gap-2 text-[12px]">
                    <span>{data.user.biodata.address}</span>|
                    <span>{data.user.biodata.phone}</span>|
                    <span>{data.user.email}</span>
                </div>
            </center>
            <section className="p-0 mb-10">
                <h2 className="text-xl font-medium uppercase text-[16px]">
                    Summary
                </h2>
                <hr className="border-slate-500 mb-2" />
                <p className="text-[12px]">{data.user.biodata.about_me}</p>
            </section>
            <section className="p-0 mb-10">
                <h2 className="text-xl font-medium uppercase text-[16px]">
                    Experience
                </h2>
                <hr className="border-slate-500 mb-2" />
                <ul>
                    {portofolio.map((porto, i) => {
                        const { title, start_date, end_date, description } =
                            porto;
                        return (
                            <li key={i}>
                                <h2 className="text-xl font-medium uppercase text-[14px]">
                                    {title}
                                </h2>
                                <span className="text-[14px]">
                                    ({formatDate(start_date, false)} -{" "}
                                    {formatDate(end_date, false)})
                                </span>
                                <p className="text-[12px]">{description}</p>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
};

export default CV;
