import {
  BookUser,
  MessageSquare,
  Newspaper,
  SquareUserRound,
  UsersRound,
} from "lucide-angular";

export const SIDEBAR_PC_SECTIONS = [
  {
    name: "profile",
    label: "Моя страница",
    url: "/profile",
    icon: SquareUserRound,
  },
  { name: "feed", label: "Новости", url: "/feed", icon: Newspaper },
  { name: "chats", label: "Мессенджер", url: "/chats", icon: MessageSquare },
  { name: "friends", label: "Друзья", url: "/friends", icon: BookUser },
  { name: "groups", label: "Сообщества", url: "/groups", icon: UsersRound },
];

export const SIDEBAR_MOBILE_SECTIONS = [
  { name: "feed", label: "Новости", url: "/feed", icon: "tuiIconHomeLarge" },
  {
    name: "friends",
    label: "Друзья",
    url: "/friends",
    icon: "tuiIconUserLarge",
  },
  {
    name: "chats",
    label: "Мессенджер",
    url: "/chats",
    icon: "tuiIconMessageSquareLarge",
  },
  {
    name: "groups",
    label: "Сообщества",
    url: "/groups",
    icon: "tuiIconUsersLarge",
  },
  {
    name: "profile",
    label: "Моя страница",
    url: "/profile",
    icon: "tuiIconGitlabLarge",
  },
];
