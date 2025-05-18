import { API_URL } from "./endpoints";

// TOKEN
export const TOKEN_POST = () => ({
  url: `${API_URL}/jwt-auth/v1/token`,
});

export const TOKEN_VALIDATE_POST = (token: string) => ({
  url: `${API_URL}/jwt-auth/v1/token/validate`,
  options: {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  },
});

// USER
export const USER_GET = () => ({
  url: `${API_URL}/user/all`,
});

export const USER_POST = () => ({
  url: `${API_URL}/api/user`,
});

// PHOTO
export const PHOTO_POST = (formData: FormData, token: string) => ({
  url: `${API_URL}/api/photo`,
  options: {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  },
});

export const PHOTOS_GET = ({
  page,
  total,
  user,
}: {
  page: number;
  total: number;
  user: number | string;
}) => ({
  url: `${API_URL}/api/photo/?_page=${page}&_total=${total}&_user=${user}`,
  options: {
    method: "GET",
    cache: "no-store",
  },
});

export const PHOTO_GET = (id: number | string) => ({
  url: `${API_URL}/api/photo/${id}`,
  options: {
    method: "GET",
    cache: "no-store",
  },
});

export const COMMENT_POST = (id: number | string, body: object) => ({
  url: `${API_URL}/api/comment/${id}`,
  options: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  },
});

export const PHOTO_DELETE = (id: number | string) => ({
  url: `${API_URL}/api/photo/${id}`,
  options: {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  },
});

// PASSWORD
export const PASSWORD_LOST = () => ({
  url: `${API_URL}/api/password/lost`,
});

export const PASSWORD_RESET = () => ({
  url: `${API_URL}/api/password/reset`,
});

// STATS
export const STATS_GET = () => ({
  url: `${API_URL}/api/stats`,
  options: {
    method: "GET",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("token")}`,
    },
  },
});
