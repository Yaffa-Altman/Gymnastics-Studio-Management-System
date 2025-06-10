import { UserRole } from "../enum/userRole.enum";

export interface Team{
    id: string,
    name: string,
    password: string,
    userRole: UserRole
}