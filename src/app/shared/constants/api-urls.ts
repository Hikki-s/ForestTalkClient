const PREFIX = "";
const DOMAIN = `http://localhost:3000${PREFIX}`;

export const API_URLS = {
  // Аутентификация
  AUTH_REGISTER: `${DOMAIN}/auth/register`,
  AUTH_LOGIN: `${DOMAIN}/auth/login`,
  AUTH_REFRESH: `${DOMAIN}/auth/refresh`,
  AUTH_LOGOUT: `${DOMAIN}/auth/logout`,

  // Пользователи
  GET_USER_BY_ID: (id: string) => `${DOMAIN}/users/${id}`,
  CREATE_USER: `${DOMAIN}/users`,
  UPDATE_USER_BY_ID: (id: string) => `${DOMAIN}/users/${id}`,
  DELETE_USER_BY_ID: (id: string) => `${DOMAIN}/users/${id}`,

  // Галерея пользователя
  GET_USER_GALLERY: (id: string) => `${DOMAIN}/users/${id}/gallery`,
  ADD_IMAGE_TO_GALLERY: (id: string) => `${DOMAIN}/users/${id}/gallery`,
  DELETE_IMAGE_FROM_GALLERY: (id: string, imageId: string) =>
    `${DOMAIN}/users/${id}/gallery/${imageId}`,

  // Настройки профиля
  GET_PROFILE_SETTINGS: (id: string) => `${DOMAIN}/users/${id}/profile`,
  UPDATE_PROFILE_SETTINGS: (id: string) => `${DOMAIN}/users/${id}/profile`,

  // Друзья
  GET_FRIENDS_LIST: (id: string) => `${DOMAIN}/users/${id}/friends`,
  ADD_FRIEND: (id: string) => `${DOMAIN}/users/${id}/friends`,
  UPDATE_FRIEND_STATUS: (id: string, friendId: string) =>
    `${DOMAIN}/users/${id}/friends/${friendId}`,

  // Посты
  GET_POST_BY_ID: (id: string) => `${DOMAIN}/posts/${id}`,
  CREATE_POST: `${DOMAIN}/posts`,
  UPDATE_POST: (id: string) => `${DOMAIN}/posts/${id}`,
  DELETE_POST: (id: string) => `${DOMAIN}/posts/${id}`,

  // Медиа к посту
  ADD_MEDIA_TO_POST: (id: string) => `${DOMAIN}/posts/${id}/media`,
  DELETE_MEDIA_FROM_POST: (id: string, mediaId: string) =>
    `${DOMAIN}/posts/${id}/media/${mediaId}`,

  // Комментарии к посту
  GET_POST_COMMENTS: (postId: string) => `${DOMAIN}/posts/${postId}/comments`,
  ADD_COMMENT_TO_POST: (postId: string) => `${DOMAIN}/posts/${postId}/comments`,
  UPDATE_COMMENT: (commentId: string) => `${DOMAIN}/comments/${commentId}`,
  DELETE_COMMENT: (commentId: string) => `${DOMAIN}/comments/${commentId}`,

  // Лайки к посту
  ADD_LIKE_TO_POST: (postId: string) => `${DOMAIN}/posts/${postId}/likes`,
  DELETE_LIKE_FROM_POST: (postId: string, likeId: string) =>
    `${DOMAIN}/posts/${postId}/likes/${likeId}`,

  // Сообщества
  GET_COMMUNITIES: `${DOMAIN}/communities`,
  GET_COMMUNITY_BY_ID: (id: string) => `${DOMAIN}/communities/${id}`,
  CREATE_COMMUNITY: `${DOMAIN}/communities`,
  UPDATE_COMMUNITY_BY_ID: (id: string) => `${DOMAIN}/communities/${id}`,
  DELETE_COMMUNITY_BY_ID: (id: string) => `${DOMAIN}/communities/${id}`,

  // Участники сообщества
  GET_COMMUNITY_MEMBERS: (id: string) => `${DOMAIN}/communities/${id}/members`,
  ADD_MEMBER_TO_COMMUNITY: (id: string) =>
    `${DOMAIN}/communities/${id}/members`,
  UPDATE_MEMBER_ROLE: (id: string, userId: string) =>
    `${DOMAIN}/communities/${id}/members/${userId}`,
  REMOVE_MEMBER_FROM_COMMUNITY: (id: string, userId: string) =>
    `${DOMAIN}/communities/${id}/members/${userId}`,

  // Галерея сообщества
  GET_COMMUNITY_GALLERY: (id: string) => `${DOMAIN}/communities/${id}/gallery`,
  ADD_IMAGE_TO_COMMUNITY_GALLERY: (id: string) =>
    `${DOMAIN}/communities/${id}/gallery`,
  DELETE_IMAGE_FROM_COMMUNITY_GALLERY: (id: string, imageId: string) =>
    `${DOMAIN}/communities/${id}/gallery/${imageId}`,

  // Настройки сообщества
  GET_COMMUNITY_SETTINGS: (id: string) =>
    `${DOMAIN}/communities/${id}/settings`,
  UPDATE_COMMUNITY_SETTINGS: (id: string) =>
    `${DOMAIN}/communities/${id}/settings`,

  // Лента новостей
  GET_FEED: `${DOMAIN}/feed`,
  GET_FEED_BY_ID: (id: string) => `${DOMAIN}/feed/${id}`,
};
