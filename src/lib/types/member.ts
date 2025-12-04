import { Request } from "express";
import { MemberStatus, MemberType } from "../enums/member.enum";

export interface Member {
  _id: string;
  memberNick: string;
  memberPhone: string;
  memberPassword?: string;
  memberType: MemberType;
  memberStatus: MemberStatus;
  memberAddress?: string;
  memberDescription?: string;
  memberImage?: string;
  memberPoints: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface MemberUpdateInput {
  memberNick?: string;
  memberPhone?: string;
  memberPassword?: string;
  memberStatus?: MemberStatus;
  memberAddress?: string;
  memberDescription?: string;
  memberImage?: string;
}
export interface MemberInput {
  memberType?: MemberType;
  memberStatus?: MemberStatus;
  memberNick: string;
  memberPhone: string;
  memberPassword: string;
  memberAddress?: string;
  memberImage?: string;
  memberDescription?: string;
  memberPoints?: string;
}

export interface LoginInput {
  memberNick: string;
  memberPassword: string;
}
