export class LoginUsuario {
    username: string;
    password: string;
    constructor(password: string, username: string) {
        this.password = password;
        this.username = username;
    }
}