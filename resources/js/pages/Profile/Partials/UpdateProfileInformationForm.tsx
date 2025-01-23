import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Textarea, Transition } from "@headlessui/react";
import { Link, useForm, usePage } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function UpdateProfileInformation({
    mustVerifyEmail,
    status,
    className = "",
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            name: user.name,
            email: user.email,
            phone: user.biodata?.phone,
            address: user.biodata?.address,
            date_of_birth: user.biodata?.date_of_birth,
            place_of_birth: user.biodata?.place_of_birth,
            about_me: user.biodata?.about_me,
            photo: user.biodata?.photo,
            github: user.biodata?.github,
            linkedin: user.biodata?.linkedin,
            instagram: user.biodata?.instagram,
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route("profile.update"));
    };

    return (
        <section className={`${className} p-0`}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">
                    Profile Information
                </h2>

                <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>
                <div>
                    <InputLabel htmlFor="about_me" value="About Me" />

                    <Textarea
                        rows={4}
                        value={data.about_me}
                        onChange={(e: any) =>
                            setData("about_me", e.target.value)
                        }
                        name="about_me"
                        id="about_me"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full mt-1"
                    ></Textarea>
                    <InputError className="mt-2" message={errors.about_me} />
                </div>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData("email", e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div>
                <div>
                    <InputLabel htmlFor="phone" value="Phone" />

                    <TextInput
                        id="phone"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        required
                        autoComplete="phone"
                    />

                    <InputError className="mt-2" message={errors.phone} />
                </div>
                <div>
                    <InputLabel htmlFor="address" value="Address" />

                    <Textarea
                        rows={3}
                        value={data.address}
                        onChange={(e: any) =>
                            setData("address", e.target.value)
                        }
                        name="address"
                        id="address"
                        className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 w-full mt-1"
                    ></Textarea>
                    <InputError className="mt-2" message={errors.address} />
                </div>
                <div>
                    <InputLabel
                        htmlFor="place_of_birth"
                        value="Place Of Birth"
                    />

                    <TextInput
                        id="place_of_birth"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.place_of_birth}
                        onChange={(e) =>
                            setData("place_of_birth", e.target.value)
                        }
                        required
                        autoComplete="place_of_birth"
                    />

                    <InputError
                        className="mt-2"
                        message={errors.place_of_birth}
                    />
                </div>
                <div>
                    <InputLabel htmlFor="github" value="Github" />

                    <TextInput
                        id="github"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.github}
                        onChange={(e) => setData("github", e.target.value)}
                        autoComplete="github"
                    />

                    <InputError className="mt-2" message={errors.github} />
                </div>
                <div>
                    <InputLabel htmlFor="instagram" value="Instagram" />

                    <TextInput
                        id="instagram"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.instagram}
                        onChange={(e) => setData("instagram", e.target.value)}
                        autoComplete="instagram"
                    />

                    <InputError className="mt-2" message={errors.instagram} />
                </div>
                <div>
                    <InputLabel htmlFor="linkedin" value="Linkedin" />

                    <TextInput
                        id="linkedin"
                        type="text"
                        className="mt-1 block w-full"
                        value={data.linkedin}
                        onChange={(e) => setData("linkedin", e.target.value)}
                        autoComplete="linkedin"
                    />

                    <InputError className="mt-2" message={errors.linkedin} />
                </div>

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="mt-2 text-sm text-gray-800">
                            Your email address is unverified.
                            <Link
                                href={route("verification.send")}
                                method="post"
                                as="button"
                                className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Click here to re-send the verification email.
                            </Link>
                        </p>

                        {status === "verification-link-sent" && (
                            <div className="mt-2 text-sm font-medium text-green-600">
                                A new verification link has been sent to your
                                email address.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
