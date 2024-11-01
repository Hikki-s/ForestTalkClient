import {
  BookUser,
  MessageSquare,
  Newspaper,
  SquareUserRound,
  UsersRound,
} from "lucide-angular";

export const SIDEBAR_SECTIONS = [
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
