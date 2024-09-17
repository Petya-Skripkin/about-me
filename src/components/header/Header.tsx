import Image from "next/image";
import CVLogo from "@/assets/cv-icon.png";
import Phone from "@/assets/phone.png";
import Telegram from "@/assets/telegram.png";
import Whatsapp from "@/assets/whatsapp.png";
import "./styles.css";

export default function Header() {
  return (
    <div className="flex justify-between items-center mb-8">
      <p className="flex gap-4 items-center text-[24px] font-semibold">
        <Image className="size-[40px]" src={CVLogo} alt="cv" />
        My business card
      </p>
      <ul className="flex gap-4 link-menu">
        <li className="flex gap-1">
          <a
            href="https://wa.me/77056982391"
            className="flex gap-1 items-center"
          >
            <Image className="size-[20px]" src={Whatsapp} alt="WhatsApp" />
          </a>
          |
          <a href="tel:+77056982391" className="flex gap-1 items-center">
            <Image className="size-[20px]" src={Phone} alt="phone number" />
            +77056982391
          </a>
        </li>
        <li>
          <a
            href="https://t.me/PS_Peter_Skripkin"
            className="flex gap-1 items-center"
          >
            <Image className="size-[20px]" src={Telegram} alt="telegram" />
            @PS_Peter_Skripkin
          </a>
        </li>
      </ul>
    </div>
  );
}
