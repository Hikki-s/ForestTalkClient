const DOMAIN = "http://localhost:3000";

export const API_URLS = {
  // Аутентификация
  AUTH_REGISTER: `${DOMAIN}/api/auth/register`,
  AUTH_LOGIN: `${DOMAIN}/api/auth/login`,
  AUTH_REFRESH: `${DOMAIN}/api/auth/refresh`,
  AUTH_LOGOUT: `${DOMAIN}/api/auth/logout`,

  // Пользователи
  GET_USER_BY_ID: (id: string) => `${DOMAIN}/api/users/${id}`,
  CREATE_USER: `${DOMAIN}/api/users`,
  UPDATE_USER_BY_ID: (id: string) => `${DOMAIN}/api/users/${id}`,
  DELETE_USER_BY_ID: (id: string) => `${DOMAIN}/api/users/${id}`,

  // Галерея пользователя
  GET_USER_GALLERY: (id: string) => `${DOMAIN}/api/users/${id}/gallery`,
  ADD_IMAGE_TO_GALLERY: (id: string) => `${DOMAIN}/api/users/${id}/gallery`,
  DELETE_IMAGE_FROM_GALLERY: (id: string, imageId: string) =>
    `${DOMAIN}/api/users/${id}/gallery/${imageId}`,

  // Настройки профиля
  GET_PROFILE_SETTINGS: (id: string) => `${DOMAIN}/api/users/${id}/profile`,
  UPDATE_PROFILE_SETTINGS: (id: string) => `${DOMAIN}/api/users/${id}/profile`,

  // Друзья
  GET_FRIENDS_LIST: (id: string) => `${DOMAIN}/api/users/${id}/friends`,
  ADD_FRIEND: (id: string) => `${DOMAIN}/api/users/${id}/friends`,
  UPDATE_FRIEND_STATUS: (id: string, friendId: string) =>
    `${DOMAIN}/api/users/${id}/friends/${friendId}`,

  // Посты
  GET_POST_BY_ID: (id: string) => `${DOMAIN}/api/posts/${id}`,
  CREATE_POST: `${DOMAIN}/api/posts`,
  UPDATE_POST: (id: string) => `${DOMAIN}/api/posts/${id}`,
  DELETE_POST: (id: string) => `${DOMAIN}/api/posts/${id}`,

  // Медиа к посту
  ADD_MEDIA_TO_POST: (id: string) => `${DOMAIN}/api/posts/${id}/media`,
  DELETE_MEDIA_FROM_POST: (id: string, mediaId: string) =>
    `${DOMAIN}/api/posts/${id}/media/${mediaId}`,

  // Комментарии к посту
  GET_POST_COMMENTS: (postId: string) =>
    `${DOMAIN}/api/posts/${postId}/comments`,
  ADD_COMMENT_TO_POST: (postId: string) =>
    `${DOMAIN}/api/posts/${postId}/comments`,
  UPDATE_COMMENT: (commentId: string) => `${DOMAIN}/api/comments/${commentId}`,
  DELETE_COMMENT: (commentId: string) => `${DOMAIN}/api/comments/${commentId}`,

  // Лайки к посту
  ADD_LIKE_TO_POST: (postId: string) => `${DOMAIN}/api/posts/${postId}/likes`,
  DELETE_LIKE_FROM_POST: (postId: string, likeId: string) =>
    `${DOMAIN}/api/posts/${postId}/likes/${likeId}`,

  // Сообщества
  GET_COMMUNITIES: `${DOMAIN}/api/communities`,
  GET_COMMUNITY_BY_ID: (id: string) => `${DOMAIN}/api/communities/${id}`,
  CREATE_COMMUNITY: `${DOMAIN}/api/communities`,
  UPDATE_COMMUNITY_BY_ID: (id: string) => `${DOMAIN}/api/communities/${id}`,
  DELETE_COMMUNITY_BY_ID: (id: string) => `${DOMAIN}/api/communities/${id}`,

  // Участники сообщества
  GET_COMMUNITY_MEMBERS: (id: string) =>
    `${DOMAIN}/api/communities/${id}/members`,
  ADD_MEMBER_TO_COMMUNITY: (id: string) =>
    `${DOMAIN}/api/communities/${id}/members`,
  UPDATE_MEMBER_ROLE: (id: string, userId: string) =>
    `${DOMAIN}/api/communities/${id}/members/${userId}`,
  REMOVE_MEMBER_FROM_COMMUNITY: (id: string, userId: string) =>
    `${DOMAIN}/api/communities/${id}/members/${userId}`,

  // Галерея сообщества
  GET_COMMUNITY_GALLERY: (id: string) =>
    `${DOMAIN}/api/communities/${id}/gallery`,
  ADD_IMAGE_TO_COMMUNITY_GALLERY: (id: string) =>
    `${DOMAIN}/api/communities/${id}/gallery`,
  DELETE_IMAGE_FROM_COMMUNITY_GALLERY: (id: string, imageId: string) =>
    `${DOMAIN}/api/communities/${id}/gallery/${imageId}`,

  // Настройки сообщества
  GET_COMMUNITY_SETTINGS: (id: string) =>
    `${DOMAIN}/api/communities/${id}/settings`,
  UPDATE_COMMUNITY_SETTINGS: (id: string) =>
    `${DOMAIN}/api/communities/${id}/settings`,

  // Лента новостей
  GET_FEED: `${DOMAIN}/api/feed`,
  GET_FEED_BY_ID: (id: string) => `${DOMAIN}/api/feed/${id}`,
};
