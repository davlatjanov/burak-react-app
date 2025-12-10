import { serverAPI } from "../../lib/config";
import { LoginInput, Member, MemberInput } from "../../lib/types/member";
import axios from "axios";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverAPI;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      let url = `${this.path}/member/top-users`;

      const result = await axios.get(url);

      return result.data;
    } catch (err) {
      console.log("ERROR, getTopUsers", err);
      throw err;
    }
  }

  public async getRestaurant(): Promise<Member> {
    try {
      let url = `${this.path}/member/restaurant`;

      const result = await axios.get(url);

      return result.data;
    } catch (err) {
      console.log("ERROR, getTopUsers", err);
      throw err;
    }
  }

  public async signup(sinupInput: MemberInput): Promise<Member> {
    try {
      let url = `${this.path}/member/signup`;

      const result = await axios.post(url, sinupInput, {
        withCredentials: true,
      });
      console.log("signup result:", result.data.member);
      localStorage.setItem("memberData", JSON.stringify(result.data.member));
      return result.data.member;
    } catch (err) {
      console.log("ERROR, signup", err);
      throw err;
    }
  }

  public async login(loginInput: LoginInput): Promise<Member> {
    try {
      let url = `${this.path}/member/login`;

      const result = await axios.post(url, loginInput, {
        withCredentials: true,
      });
      console.log("login result:", result.data.member);
      localStorage.setItem("memberData", JSON.stringify(result.data.member));
      return result.data.member;
    } catch (err) {
      console.log("ERROR, login", err);
      throw err;
    }
  }

  public async logout(): Promise<void> {
    try {
      let url = `${this.path}/member/logout`;

      await axios.post(
        url,
        {},
        {
          withCredentials: true,
        }
      );
      localStorage.removeItem("memberData");
    } catch (err) {
      console.log("ERROR, logout", err);
      throw err;
    }
  }
}
export default MemberService;
