import { ObjectId } from "mongodb";

export type User = {
    _id?: ObjectId;
    email: string;
    password: string;
    name: string;
    role?: string;
};

export type Role = {
    _id: ObjectId;
    title: string;
};
