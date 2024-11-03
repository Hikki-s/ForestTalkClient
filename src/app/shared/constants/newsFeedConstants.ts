export const NEWS_FEED_SIDEBAR_SECTIONS = [
  { name: "news", label: "Новости", url: "/feed", queryParams: {} },
  {
    name: "photo",
    label: "Фотографии",
    url: "/feed",
    queryParams: { section: "photos" },
  },
  {
    name: "friends",
    label: "Посты друзей",
    url: "/feed",
    queryParams: { section: "friends" },
  },
  {
    name: "groups",
    label: "Посты групп",
    url: "/feed",
    queryParams: { section: "groups" },
  },
];
