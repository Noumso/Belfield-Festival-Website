export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("adminToken", token);
  }
};

export const getToken = () => {
  if (typeof window === 'undefined') return null; // SSR check
  return localStorage.getItem("adminToken");
};

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("adminToken");
  }
};
