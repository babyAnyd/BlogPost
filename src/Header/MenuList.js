import { v4 as uuidV4 } from "uuid";

export const MenuList = [
  {
    id: uuidV4(),
    title: "Home",
    links: "/",
  },
  {
    id: uuidV4(),
    title: "Blogs",
    links: "/blogs",
  },
  {
    id: uuidV4(),
    title: "Contact",
    links: "/contact",
  },
];
