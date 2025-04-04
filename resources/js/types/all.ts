export interface PortofolioItemProps {
    id: string;
    thumbnail: string;
    title: string;
    description: string;
    details: string;
    start_date: string;
    end_date: string;
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
export interface AchievementProps {
    id:string,
    title: string;
    description?: string;
    attachment1: string;
    attachment2?: string;
}

export enum LayoutType {
    GRID = "grid",
    LIST = "list",
}
