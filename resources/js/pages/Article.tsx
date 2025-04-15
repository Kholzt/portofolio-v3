import React, { useEffect, useState } from 'react'
import { ArticlesProps, CategoryProps } from '../types/all';
import Article1 from './themes/01/Article';


const Article = ({ data }: { data: { articles: ArticlesProps[], categories: CategoryProps[] } }) => {
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
                return <Article1 data={data} />;
            case "theme1":
            default:
                return <Article1 data={data} />;
        }
    };
    return (
        <div >
            {renderTheme()}
        </div>
    )
}

export default Article
