import { serverAPI } from "../../lib/config";
import { Member, MemberInput } from "../../lib/types/member";
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

  public async signup(memberInput: MemberInput): Promise<Member> {
    try {
      let url = `${this.path}/member/signup`;

      const result = await axios.post(url, memberInput, {
        withCredentials: true,
      });
      console.log("signup result:", result.data.member);
      localStorage.setItem("member", JSON.stringify(result.data.member));
      return result.data.member;
    } catch (err) {
      console.log("ERROR, signup", err);
      throw err;
    }
  }
}

export default MemberService;
