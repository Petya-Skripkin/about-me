"use client"
import Image from "next/image";
import Outsourcing from "@/assets/outsourcing-icon.jpg";
import "./styles.css";
import Badge from "./Badge";
import { technologies } from "@/mock";
import { ICompany } from "@/types/Company";

interface IExperienceBlock {
  company: ICompany;
}

export default function ExperienceBlock({ company }: IExperienceBlock) {
  const filteredTechnologies = technologies.filter((item) =>
    item.companies.find(
      (value) =>
        value.toLocaleLowerCase() === company.companyName.toLocaleLowerCase()
    )
  );

  function getDate(date: number[]) {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(date.toString()).toLocaleDateString("ru-RU", options);
  }

  const startDate = getDate(company.experienceStart);
  const endDate = getDate(company.experienceEnd);

  return (
    <div className="flex gap-[16px]">
      <div>
        <Image
          className="max-w-[166px]"
          src={company.image ?? Outsourcing}
          alt="evrika"
        />
      </div>
      <div className="flex flex-col gap-[8px]">
        {company.aboutCompany ? (
          <div>
            <h3 className="h3">Немного о компании</h3>
            <div>
              {company.link ? (
                <>
                  <a href="https://evrika.com/" className="link">
                    Компания {company.companyName}
                  </a>
                  {" - " + company.aboutCompany}
                </>
              ) : (
                <>
                  Компания {company.companyName}
                  {" - " + company.aboutCompany}
                </>
              )}
              <p>
                Работал с
                <span className="font-[700]">{" " + startDate + " "}</span>
                по
                <span className="font-[700]">{" " + endDate}</span>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="h3">Outsource компания</h3>
            <p>
              Работал с
              <span className="font-[700]">{" " + startDate + " "}</span>
              по
              <span className="font-[700]">{" " + endDate}</span>
            </p>
          </div>
        )}
        <div>
          <h3 className="h3">Технологии</h3>
          <div className="flex flex-wrap gap-[6px] mt-[8px]">
            {filteredTechnologies.map((item, i) => (
              <Badge key={i}>{item.technology}</Badge>
            ))}
          </div>
        </div>
        <div>
          <h3 className="h3">Немного о том чем я там занимался</h3>
          <ul className="list-disc pl-[20px]">
            {company.employment.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
