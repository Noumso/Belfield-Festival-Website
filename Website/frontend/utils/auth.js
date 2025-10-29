// adminToken を統一して扱う
export const setToken = (token) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem("adminToken", token);
  }
};

export const getToken = () => {
  if (typeof window === 'undefined') return null; // SSR 時は null
  return localStorage.getItem("adminToken");
};

export const removeToken = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem("adminToken");
  }
};
