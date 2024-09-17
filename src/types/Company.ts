import { StaticImageData } from "next/image";

export interface ICompany {
  companyName: string;
  aboutCompany: string | null;
  link: string | null;
  image: StaticImageData | string | null;
  experienceStart: number[];
  experienceEnd: number[];
  employment: string[];
}
