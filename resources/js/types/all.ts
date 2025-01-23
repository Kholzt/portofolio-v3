export interface PortofolioItemProps {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    technologies: string[];
    created_at: string;
}

export interface LinksItemProps {
    url: string;
    label: string;
    active: boolean;
}

export interface BiodataProps {
    phone?: string;
    address?: string;
    date_of_birth?: string;
    place_of_birth?: string;
    about_me?: string;
    photo?: string;
}
