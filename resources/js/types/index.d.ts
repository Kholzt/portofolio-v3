export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at?: string;
    biodata: Biodata;
}
export interface Biodata {
    phone?: string;
    address?: string;
    date_of_birth?: string;
    place_of_birth?: string;
    about_me?: string;
    photo?: string;
    github?: string;
    instagram?: string;
    linkedin?: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
