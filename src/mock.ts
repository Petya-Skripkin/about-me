import Evrika from "@/assets/evrika.png";
import { ICompany } from "./types/Company";

export const technologies = [
  {
    technology: "React",
    knowledge: 70,
    companies: ['evrika']
  },
  {
    technology: "Redux",
    knowledge: 50,
    companies: ['evrika']
  },
  {
    technology: "React Query",
    knowledge: 60,
    companies: ['evrika']
  },
  {
    technology: "i18next",
    knowledge: 80,
    companies: ['evrika']
  },
  {
    technology: "TypeScript",
    knowledge: 90,
    companies: ['evrika', 'Outsource']
  },
  {
    technology: "CSS",
    knowledge: 98,
    companies: ['evrika', 'Outsource']
  },
  {
    technology: "SASS(SCSS)",
    knowledge: 96,
    companies: ['evrika', 'Outsource']
  },
  {
    technology: "Bootstrap",
    knowledge: 60,
    companies: ['evrika', 'Outsource']
  },
  {
    technology: "Laravel",
    knowledge: 48,
    companies: ['evrika']
  },
  {
    technology: "Livewire",
    knowledge: 58,
    companies: ['evrika']
  },
  {
    technology: "Alpine.js",
    knowledge: 86,
    companies: ['evrika']
  },
  {
    technology: "Formik",
    knowledge: 64,
    companies: ['evrika']
  },
  {
    technology: "Vue",
    knowledge: 34,
    companies: ['Outsource']
  },
  {
    technology: "Vuex",
    knowledge: 24,
    companies: ['Outsource']
  },
  {
    technology: "Vuelidate",
    knowledge: 36,
    companies: ['Outsource']
  },
  {
    technology: "WebSocket",
    knowledge: 36,
    companies: ['Outsource']
  },
  {
    technology: "Tailwind",
    knowledge: 76,
    companies: []
  },
];

export const companies: ICompany[] = [
  {
    image: Evrika,
    companyName: 'Evrika',
    aboutCompany: 'казахстанская торговая сеть по продаже электроники, мобильной и бытовой техники.',
    link: "https://evrika.com/",
    experienceStart: [2022, 7, 22],
    experienceEnd: [2023, 10, 15],
    employment: [
      'Работал с компонентами корзины, интегрированными через Laravel и Livewire.',
      'Работал с подключением аналитики(Google tag manager).',
      'Добавлял функционал redux и типизировал его.',
      'Добавлял яндекс карты.',
      'Разрабатывал страницу товара.',
      'Разрабатывал страницу каталога товаров.',
      'Разрабатывал меню каталога товаров.',
      'Слайдеры и анимации.',
    ]
  },
  {
    image: null,
    companyName: 'Outsource',
    aboutCompany: null,
    link: null,
    experienceStart: [2021, 5, 22],
    experienceEnd: [2022, 4, 10],
    employment: [
      'Работал с формами и их валидацией.',
      'Дорабатывал проекты используя vue, vuex.',
      'Создавал компоненты и адаптировал под мобильные приложения.',
      'Разрабатывал общение между окнами WebSocket.',
    ]
  },
]
