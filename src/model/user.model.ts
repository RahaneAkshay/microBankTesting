export interface UserModel {
    fullName: string;
    dateOfIncorporation: Date | string;
    email: string;
    password: string;
    confirmPassword: string
}