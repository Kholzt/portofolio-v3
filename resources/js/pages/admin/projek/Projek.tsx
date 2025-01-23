import PrimaryButton from "@/Components/PrimaryButton";
import { formatDate } from "@/helpers/helpers";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { LinksItemProps, PortofolioItemProps } from "@/types/all";
import { Head, Link } from "@inertiajs/react";
import React from "react";
interface ProjekProps {
    data: {
        portofolio: {
            data: PortofolioItemProps[];
            links: LinksItemProps[];
        };
    };
}
const Projek: React.FC<ProjekProps> = ({ data }) => {
    console.log(data.portofolio);

    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Projek
                </h2>
            }
        >
            <Head title="Projek" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="flex justify-end p-4">
                            <PrimaryButton href={route("projek.create")}>
                                Tambah Projek
                            </PrimaryButton>
                        </div>
                        <table className="w-full">
                            <thead className="bg-slate-50">
                                <th className="border-b px-4 py-4 w-20">No</th>
                                <th className="border-b px-4 py-4" align="left">
                                    Thumbnail
                                </th>
                                <th className="border-b px-4 py-4" align="left">
                                    Nama Projek
                                </th>
                                <th className="border-b px-4 py-4" align="left">
                                    Tanggal Dibuat
                                </th>
                                <th className="border-b px-4 py-4" align="left">
                                    Aksi
                                </th>
                            </thead>
                            <tbody>
                                {data.portofolio.data.map((porto, i) => {
                                    const resultFormatDate = formatDate(
                                        porto.created_at
                                    );
                                    i++;
                                    return (
                                        <tr
                                            key={i}
                                            className="odd:bg-white even:bg-slate-50"
                                        >
                                            <td className="px-4 py-2 text-center ">
                                                {i++}
                                            </td>
                                            <td className="px-4 py-2 text-start ">
                                                <img
                                                    src={porto.thumbnail}
                                                    className=" aspect-video object-cover w-20 object-top rounded-sm"
                                                    alt={porto.title}
                                                />
                                            </td>
                                            <td className="px-4 py-2 text-start ">
                                                {porto.title}
                                            </td>
                                            <td className="px-4 py-2 text-start ">
                                                {resultFormatDate}
                                            </td>
                                            <td className="px-4 py-2 text-start ">
                                                <Link
                                                    href={route(
                                                        "projek.edit",
                                                        porto.id
                                                    )}
                                                >
                                                    Edit
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                        <div className="flex gap-2 p-4 justify-end">
                            {data.portofolio.links.map((link, i) => {
                                return (
                                    <Link
                                        className={`px-4 py-2 border rounded-md ${
                                            link.active && "bg-slate-100"
                                        }`}
                                        href={link.url}
                                        key={i}
                                        dangerouslySetInnerHTML={{
                                            __html: link.label,
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Projek;
