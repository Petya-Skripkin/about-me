import ExperienceBlock from "@/components/experience-block/ExperienceBlock";
import Header from "@/components/header/Header";
import PercentageBar from "@/components/percentage-bar/PercentageBar";
import PersonalInfo from "@/components/personal-info/PersonalInfo";
import MainLayout from "@/layouts/main-layout";
import { companies, technologies } from "@/mock";

export default function Home() {
  const aboutTexts = [
    "Люблю делать анимации и прочие прикольные на вид штучки. Хочу поработать в хорошей команде. Учился сам, менторов не было поэтому могу не знать многие термины.",
    "Люблю поиграть в игры, но не очень люблю активный отдых.",
    "Из планов на будущее освободить себе достаточно времени чтобы повидать страны. И когда-нибудь попробовать сменить профессию.",
    "Не стал сюда добавлять запросы и мобилку. Эта страничка просто обо мне)",
  ];

  return (
    <MainLayout>
      <div className="px-10 py-5">
        <Header />
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg p-6 mb-[32px]">
          <h1 className="text-3xl font-bold mb-2">Привет, я Пётр</h1>
          <p className="text-lg">
            Front-end разработчик и любитель красивых интерфейсов
          </p>
        </div>
        <div className="flex gap-[24px]">
          <div className="flex flex-2 flex-col max-w-[900px]">
            <PersonalInfo />
            <div className="my-[24px]">
              <h2 className="h2 mb-[24px]">Опыт работы</h2>
              <div className="flex flex-col gap-[32px]">
                {companies.map((company, i) => (
                  <ExperienceBlock key={i} company={company} />
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 w-[100%]">
            <h3 className="h3">Список технологий</h3>
            <p className="text-[12px] text-[300] text-grey mb-[18px]">
              По моим личным оценкам
            </p>
            <div className="flex flex-col gap-[16px]">
              {technologies
                .sort((a, b) => b.knowledge - a.knowledge)
                .map((item, i) => (
                  <PercentageBar
                    key={i}
                    name={item.technology}
                    progress={item.knowledge}
                  />
                ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[6px] mt-[24px]">
          <h2 className="h2">Немного обо мне</h2>
          {aboutTexts.map((text, i) => (
            <p
              key={i}
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${i * 0.2 + 0.1}s` }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
