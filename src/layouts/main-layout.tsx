import Image from "next/image";
import { ReactNode } from "react";
import "./layout-styles.css";

import ReactLogo from "@/assets/react-logo.png";
import Points from "@/components/points/Points";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <h2 className="anime-text absolute-position bgc-gradient font-mono text-8xl top-[40px] pos-left">
        React
      </h2>
      <Image className="anime-left absolute-position top-[36px] pos-right opacity-50" src={ReactLogo} alt="react logo" />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-28 font-[family-name:var(--font-geist-sans)]">
        <main className="w-[100%] row-start-2 items-center sm:items-start bg-[#E5E7E7] rounded-lg">
          {children}
        </main>
      </div>
      <Image className="anime-right absolute-position bottom-[4%] pos-left opacity-50" src={ReactLogo} alt="react logo" />
      <div className="anime-text absolute-position bottom-[8%] pos-right w-[20%]">
        <Points />
      </div>
    </div>
  );
}
