import Authenticated from "@/Layouts/AuthenticatedLayout";
import Update from "./Update";
import { Head } from "@inertiajs/react";

const Biodata = () => {
    return (
        <Authenticated>
            <Head title="Biodata" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg p-4 sm:p-8">
                        <Update status={undefined} mustVerifyEmail />
                    </div>
                </div>
            </div>
        </Authenticated>
    );
};

export default Biodata;
