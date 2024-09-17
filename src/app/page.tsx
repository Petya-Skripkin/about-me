import ExperienceBlock from "@/components/experience-block/ExperienceBlock";
import Header from "@/components/header/Header";
import PercentageBar from "@/components/percentage-bar/PercentageBar";
import PersonalInfo from "@/components/personal-info/PersonalInfo";
import MainLayout from "@/layouts/main-layout";
import { companies, technologies } from "@/mock";

export default function Home() {
  return (
    <MainLayout>
      <div className="px-10 py-5">
        <Header />
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
        <div className="flex flex-col gap-[6px]">
          <h2 className="h2">Немного обо мне</h2>
          <p>Люблю делать анимации и прочие прикольные на вид штучки. Хочу поработать в хорошей команде. Учился сам, менторов не было поэтому могу не знать многие термины.</p>
          <p>Люблю поиграть в игры, но не очень люблю активный отдых.</p>
          <p>Из планов на будущее освободить себе достаточно времени чтобы повидать страны. И когда-нибудь попробовать сменить профессию.</p>
          <p>Не стал сюда добавлять запросы и мобилку. Эта страничка просто обо мне)</p>
        </div>
      </div>
    </MainLayout>
  );
}
