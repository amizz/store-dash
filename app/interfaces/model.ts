export type User = {
    id?: string;
    email: string;
    password: string;
    name: string;
    role?: string;
};

export type Role = {
    id: string;
    title: string;
};
