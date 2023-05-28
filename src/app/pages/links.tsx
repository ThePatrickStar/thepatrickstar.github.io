import {
  FaMedium,
  FaBlog,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import {
  SiGooglescholar
} from "react-icons/si";

export const links = [
  {
    index: 0,
    title: "Find me on Github",
    href: "https://github.com/thepatrickstar",
    icon: <FaGithub />,
  },
  {
    index: 1,
    title: "Find me on LinkedIn",
    href: "https://sg.linkedin.com/in/yuekang-li-9a890b68",
    icon: <FaLinkedin />,
  },
  {
    index: 2,
    title: "Contact me via email",
    href: "mailto:yli044@e.ntu.edu.sg",
    icon: <FaEnvelope />,
  },
  {
    index: 3,
    title: "Find me on Google Scholar",
    href: "https://scholar.google.com/citations?user=tuJEDb4AAAAJ&hl=en",
    icon: <SiGooglescholar />,
  },
  // {
  //   index: 4,
  //   title: "Find me on Blog",
  //   href: "https://noworneverev.github.io/blog/",
  //   icon: <FaBlog />,
  // },
];
