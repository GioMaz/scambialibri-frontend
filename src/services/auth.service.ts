import IUser from '../models/user.model';
import axios from 'axios';

export default class AuthService {
  private url: string;
  public user: IUser | undefined
  public token: string | undefined
  public authenticated: boolean | undefined

  constructor(url: string) {
      this.url = url;
  }

  async login(mail: string, password: string): Promise<IUser> {
    const response = await axios.post(this.url, {
      mail: mail,
      password: password
    })

    // if (!response.data.accessToken) {
    // }

    this.user = response.data as IUser;
    this.token = this.user.accessToken;

    return this.user;
  }

  logout(): void {
    this.authenticated = false;
    localStorage.clear();
  }
}
