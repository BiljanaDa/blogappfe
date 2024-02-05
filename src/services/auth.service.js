import HttpService from "./Http.service";

export default class AuthService extends HttpService {
  static async register(data) {
    const response = await this.request({
      method: "POST",
      url: "/signup",
    data
    });
    return response;
  }

  static async login(data) {
    const response = await this.request({
      method: "POST",
      url: "/signin",
    data
    });
    return response;
  }

} 
