import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import UploadZone from "@/Components/UploadZone";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Textarea } from "@headlessui/react";
import { Head, useForm } from "@inertiajs/react";
import React, { FormEvent } from "react";

const Form: React.FC<any> = ({ data }) => {
    const {
        data: formData,
        setData,
        errors,
        post,
        patch,
        put,
    } = useForm({
        title: data.data.title,
        description: data.data.description,
        thumbnail: "",
        details: data.data.details,
        start_date: data.data.start_date,
        end_date: data.data.end_date,
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        post(data.action_form);
    };
    return (
        <Authenticated
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Projek / {data.title}
                </h2>
            }
        >
            <Head title={data.title} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={handleSubmit}
                            method="post"
                            encType="multipart/form-data"
                            className="p-4"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="">
                                    <InputLabel
                                        htmlFor="thumbnail"
                                        value="Thumbnail"
                                    />
                                    <UploadZone
                                        accept="image/*"
                                        className="mt-1"
                                        onFileChange={(e: any) =>
                                            setData("thumbnail", e)
                                        }
                                    />
                                    <InputError
                                        message={errors.thumbnail}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="">
                                    <div className="mb-2">
                                        <InputLabel
                                            htmlFor="title"
                                            value="Judul"
                                        />

                                        <TextInput
                                            id="title"
                                            type="text"
                                            name="title"
                                            placeholder="Judul Projek"
                                            value={formData.title}
                                            className="mt-1 block w-full"
                                            autoComplete="current-title"
                                            onChange={(e: any) =>
                                                setData("title", e.target.value)
                                            }
                                        />

                                        <InputError
                                            message={errors.title}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="">
                                        <InputLabel
                                            htmlFor="description"
                                            value="Keterangan Projek"
                                        />
                                        <Textarea
                                            rows={4}
                                            value={formData.description}
                                            onChange={(e: any) =>
                                                setData(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            name="description"
                                            placeholder="Judul Projek"
                                            id="description"
                                            className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full mt-1"
                                        ></Textarea>

                                        <InputError
                                            message={errors.description}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <InputLabel
                                        htmlFor="start_date"
                                        value="Tanggal Awal"
                                    />

                                    <TextInput
                                        id="start_date"
                                        type="date"
                                        name="start_date"
                                        placeholder="Judul Projek"
                                        value={formData.start_date}
                                        className="mt-1 block w-full"
                                        autoComplete="current-start_date"
                                        onChange={(e: any) =>
                                            setData(
                                                "start_date",
                                                e.target.value
                                            )
                                        }
                                    />

                                    <InputError
                                        message={errors.start_date}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mb-2">
                                    <InputLabel
                                        htmlFor="end_date"
                                        value="Tanggal Akhir"
                                    />

                                    <TextInput
                                        id="end_date"
                                        type="date"
                                        name="end_date"
                                        placeholder="Judul Projek"
                                        value={formData.end_date}
                                        className="mt-1 block w-full"
                                        autoComplete="current-end_date"
                                        onChange={(e: any) =>
                                            setData("end_date", e.target.value)
                                        }
                                    />

                                    <InputError
                                        message={errors.end_date}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <InputLabel
                                        htmlFor="details"
                                        value="Keterangan Pengerjaan"
                                    />
                                    <Textarea
                                        rows={4}
                                        value={formData.details}
                                        onChange={(e: any) =>
                                            setData("details", e.target.value)
                                        }
                                        name="details"
                                        placeholder="Keterangan Pengerjaan"
                                        id="details"
                                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full mt-1"
                                    ></Textarea>

                                    <InputError
                                        message={errors.details}
                                        className="mt-2"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-end p-4">
                                <PrimaryButton type="submit">
                                    Simpan
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Form;
