import javascript_icon from "../../../public/javascript-original 1.svg";
import typescript_icon from "../../../public/typescript-logo.svg";
import react_icon from "../../../public/react-logo.svg";
import redux_icon from "../../../public/redux-logo.svg";
import nextjs_icon from "../../../public/nextjs_logo.svg";
import html_icon from "../../../public/html_icon.svg";
import css_icon from "../../../public/css_logo.svg";
import tailwind_icon from "../../../public/tailwind-logo.svg";
import bootstrap_icon from "../../../public/logos_bootstrap.svg";
import sass_icon from "../../../public/logos_sass.svg";
import laptop_img from "../../../public/laptop_image.svg";
import chain_img from "../../../public/chain_icon.svg";
import github_icon from "../../../public/github_icon_small.svg";
import profile_rectangle from "../../../public/my_profile.jpg";
import profile_circle from "../../../public/profile_pic1.jpg";


const techStackIcons = [
  {
    id: 1,
    url: html_icon,
    description: "Html5",
  },
  {
    id: 2,
    url: css_icon,
    description: "CSS3",
  },
  {
    id: 3,
    url: tailwind_icon,
    description: "Tailwind",
  },
  {
    id: 4,
    url: bootstrap_icon,
    description: "Bootstrap",
  },
  {
    id: 5,
    url: sass_icon,
    description: "SaSS",
  },
  {
    id: 6,
    url: javascript_icon,
    description: "Javascript",
  },
  {
    id: 7,
    url: typescript_icon,
    description: "Typescript",
  },
  {
    id: 8,
    url: react_icon,
    description: "ReactJS",
  },
  {
    id: 9,
    url: redux_icon,
    description: "Redux Toolkit",
  },
  {
    id: 10,
    url: nextjs_icon,
    description: "NextJs",
  },
];
const myProjectsData = [
  // id: number;
  // laptop_img: any;
  // chain_icon: any;
  // github_icon: any;
  // description: string;
  // github_repository: string;
  // live_url:string;
  {
    id: 1,
    laptop_img: laptop_img,
    chain_icon: chain_img,
    github_icon: github_icon,
    description: "Flixx Movie App is a user-friendly platform for exploring trending movies. The homepage highlights new releases, linking to detailed pages with genre, rating, release date, and trailers. Its clean design makes browsing simple",
    live_url: "https://flixx-movie-app-jade.vercel.app",
    github_repository: "https:///github.com/favouridoko1/flixx-movie-app",
  },
  {
    id: 2,
    laptop_img: laptop_img,
    chain_icon: chain_img,
    github_icon: github_icon,
    description:
      "The Shopping List app allows users to easily add and manage items they need to purchase. With a clean and straightforward interface, it includes features for adding items to the list and clearing all items at once. This app is designed for simplicity",
    github_repository: "https://github.com/favouridoko1/JS-Shopping-List-Project",
    live_url: "https://shopping-list-five-liart.vercel.app/",
  },
  
  {
    id: 3,
    laptop_img: laptop_img,
    chain_icon: chain_img,
    github_icon: github_icon,
    description:
      "This movie website offers an easy-to-navigate platform with sections for trending, popular, and top-rated films, plus details like genres and release dates. Its clean interface and search function make it simple to find or discover movies",
    live_url: "https://movie-website-lyart-mu.vercel.app/",
    github_repository: "https://github.com/favouridoko1/react-app",
  },
  
  // {
  //   id: 4,
  //   laptop_img: laptop_img,
  //   chain_icon: chain_img,
  //   github_icon: github_icon,
  //   description:
  //     "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //   live_url: "https://flixx-movie-app-jade.vercel.app",
  //   github_repository: "https:///github.com/favouridoko1/flixx-movie-app",
  // },
  // {
  //   id: 5,
  //   laptop_img: laptop_img,
  //   chain_icon: chain_img,
  //   github_icon: github_icon,
  //   description:
  //     "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //   live_url: "https://flixx-movie-app-jade.vercel.app",
  //   github_repository: "https:///github.com/favouridoko1/flixx-movie-app",
  // },
  // {
  //   id: 6,
  //   laptop_img: laptop_img,
  //   chain_icon: chain_img,
  //   github_icon: github_icon,
  //   description:
  //     "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //   live_url: "https://flixx-movie-app-jade.vercel.app",
  //   github_repository: "https:///github.com/favouridoko1/flixx-movie-app",
  // },
  // {
  //   id: 8,
  //   laptop_img: laptop_img,
  //   chain_icon: chain_img,
  //   github_icon: github_icon,
  //   description:
  //     "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //   live_url: "https://flixx-movie-app-jade.vercel.app",
  //   github_repository: "https:///github.com/favouridoko1/flixx-movie-app",
  // },
  // {
  //   id: 9,
  //   laptop_img: laptop_img,
  //   chain_icon: chain_img,
  //   github_icon: github_icon,
  //   description:
  //     "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
  //   live_url: "https://flixx-movie-app-jade.vercel.app",
  //   github_repository: "https:///github.com/favouridoko1/flixx-movie-app",
  // },
];

const about_me = [
  {
    img_url: profile_rectangle,
    description:
      "I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me. I began my journey as a web developer in 2023, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. with over 1 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more. When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub",
  },
];

const profile_image = [
  {profile_circle:profile_circle}
]

export { techStackIcons, myProjectsData, about_me, profile_image};
