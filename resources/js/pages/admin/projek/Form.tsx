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
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        post(data.action_form);
        // if (data.method == "POST") {
        // } else {
        //     post(data.action_form, {
        //         forceFormData: true,
        //         onSuccess: () => console.log("berhaisl"),
        //     });
        // }
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
                                        maxFiles={1}
                                        className="mt-1"
                                        onFilesChange={(e: any) =>
                                            setData("thumbnail", e[0].file)
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
                                            value="Keterangan"
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
