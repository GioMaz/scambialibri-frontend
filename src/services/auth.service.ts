import IUser from '../models/user.model';
import axios from 'axios';

export default class AuthService {
    private url: string;
    public user: IUser
    public token: string 
    public authenticated: boolean;

    constructor(url: string) {
        this.url = url;
    }

    async login(mail: any, password: any) {
        const response = await axios.post(this.url, {
          mail: mail,
          password: password
        })

        // if (!response.data.accessToken) {
        // }

        this.user = response.data as IUser;
        this.token = this.user.accessToken;

        this.saveStateToLocalStorage();

        return this.user;
    }

    logout() {
        this.authenticated = false;
        localStorage.clear();
    }

    private saveStateToLocalStorage() {
        localStorage.setItem('token', this.token);
        localStorage.setItem('user', JSON.stringify(this.user));
    }
}