import thinknLogo from "../assets/renuem.png";
import clearear from "../assets/clearear.jpg";
import mosGames from "../assets/mos-games.png";

export const jobs = [
  {
    title: "Thinkn",
    icon: thinknLogo,
    summary: "National carbon registry software.",
    points: [
      "Shipped Togo's carbon registry with a team of two: I led the frontend and certificate flows; my teammate led backend and blockchain. Later we worked across both.",
      "Contributed to Zimbabwe registry work, including blockchain-related features, in TypeScript, React, Next.js, NestJS, GraphQL, PostgreSQL, and AWS.",
      "Built landing pages for new business brands as the company evolved, and shipped UI and API features including French localisation, certificate PDFs, and credit ranges.",
    ],
  },
  {
    title: "Clear Ear",
    icon: clearear,
    summary: "Hearing clinic appointment app.",
    points: [
      "Built a React Native Android app so a hearing clinic can manage patient appointments.",
      "Stored customer details and appointment history on the device with AsyncStorage.",
      "Took the workflow from clinic staff and shaped the app around how the clinic runs day to day.",
    ],
  },
  {
    title: "Mo’s Games",
    icon: mosGames,
    summary: "Gaming lounge website, ordering, and data-led pricing.",
    points: [
      "Built and maintained the Mo's Games website in HTML, CSS, and JavaScript.",
      "Built a bubble tea pickup ordering flow so customers could order ahead and collect in store.",
      "Used competitor gaming lounge data to benchmark pricing and guide how we priced sessions and retail.",
    ],
  },
];
