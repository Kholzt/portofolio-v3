import React, { useState, useEffect } from "react";
import { AchievementProps, PortofolioItemProps } from "@/types/all";
import { User } from "@/types";
import Theme1 from "./themes/01/Portofolio";
import Theme2 from "./themes/02/Portofolio";

interface PortofolioProps {
    data: {
        portofolio: PortofolioItemProps[];
        experience: PortofolioItemProps[];
        user: User;
        achievement: AchievementProps[];
    };
}

const Landing: React.FC<PortofolioProps> = ({ data }) => {
    const [selectedTheme, setSelectedTheme] = useState<"theme1" | "theme2">("theme1");
    const [showModal, setShowModal] = useState(false);

    // Load dari localStorage saat pertama kali
    useEffect(() => {
        const storedTheme = localStorage.getItem("selectedTheme");
        if (storedTheme === "theme1" || storedTheme === "theme2") {
            setSelectedTheme(storedTheme);
        } else {
            setShowModal(false); // jika belum ada pilihan, tampilkan modal
        }
    }, []);

    const handleSelect = (theme: "theme1" | "theme2") => {
        setSelectedTheme(theme);
        localStorage.setItem("selectedTheme", theme);
        setShowModal(false);
    };

    const renderTheme = () => {
        switch (selectedTheme) {
            case "theme2":
                return <Theme2 data={data} />;
            case "theme1":
            default:
                return <Theme1 data={data} />;
        }
    };

    return (
        <div>
            {/* Modal Pilih Tema */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md text-center">
                        <h2 className="text-xl font-bold mb-4">Choose Your Theme</h2>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => handleSelect("theme1")}
                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                            >
                                Theme 1
                            </button>
                            <button
                                onClick={() => handleSelect("theme2")}
                                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                            >
                                Theme 2
                            </button>
                        </div>
                        <p className="text-sm text-gray-500 mt-4">You can change theme later anytime.</p>
                    </div>
                </div>
            )}

            {/* Tombol ganti tema */}
            <button
                onClick={() => setShowModal(true)}
                className="fixed bottom-4 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 z-50"
                title="Change Theme"
            >
                <i className="fa fa-paint-brush"></i>
            </button>

            {/* Tampilkan Tema */}
            {renderTheme()}
        </div>
    );
};

export default Landing;
