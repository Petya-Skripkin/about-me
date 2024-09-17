import Image from "next/image";
import MyPhoto from "@/assets/my-photo.jpg";
import Github from "@/assets/github.png";
import Habr from "@/assets/habr.png";
import HH from "@/assets/hh.ico";

export default function PersonalInfo() {
  return (
    <div className="flex gap-10">
      <Image className="size-[200px] border-2 border-[#202C36] rounded-full" src={MyPhoto} alt="cv" />
      <div className="">
        <h1 className="leading-[48px] text-[48px] font-bold">Middle Front-end Developer</h1>
        <h2 className="h2 text-[#123147]">Specializing in React and JavaScript</h2>
        <div className="flex gap-4">
          <a className="flex items-center gap-1" href="https://github.com/Petya-Skripkin">
            <Image className="size-[30px]" src={Github} alt="github" />
            GitHub
          </a>
          <a className="flex items-center gap-1" href="https://hh.kz/resume/20abe52fff0869e38d0039ed1f386376623443">
            <Image className="size-[20px]" src={HH} alt="hh" />
            Head Hunter
          </a>
          <a className="flex items-center gap-1" href="https://career.habr.com/petya-skripkin">
            <Image className="size-[20px] rounded-full" src={Habr} alt="habr career" />
            Habr Career
          </a>
        </div>
      </div>
    </div>
  );
}
