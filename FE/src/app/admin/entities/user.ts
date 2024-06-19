export interface IUsers {
    _id?: { $oid: string };
    username: string;
    password: string;
    email: string;
    role: string;
    team: string;
    image: string;
    created_at: string;
    // updated_at: string;
}