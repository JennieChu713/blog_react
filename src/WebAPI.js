import { getAuthToken } from "./utils";

const BASE_URL = "https://student-json-api.lidemy.me";

export const getPosts = (page) => {
  //https://student-json-api.lidemy.me/posts?&_page=2&_limit=5&_sort=id&_order=desc
  return fetch(`${BASE_URL}/posts?_page=${page}&_limit=5`)
    .then((res) => res.json())
    .catch((err) => err.toString());
};
export const getAllPosts = () => {
  return fetch(`${BASE_URL}/posts`)
    .then((res) => res.json())
    .catch((err) => err.toString());
};

export const login = (username, password) => {
  return fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => err.toString());
};

export const register = (username, nickname, password) => {
  return fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      nickname,
      password,
    }),
  })
    .then((res) => res.json())
    .catch((err) => err.toString());
};

export const newPost = (title, body, userId) => {
  return fetch(`${BASE_URL}/newpost`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      userId,
      title,
      body,
    }),
  })
    .then((res) => res.json())
    .catch((err) => err.toString());
};

export const getMe = () => {
  const token = getAuthToken();
  return fetch(`${BASE_URL}/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => err.toString());
};
