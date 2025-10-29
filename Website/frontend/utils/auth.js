export const setToken = (token) => localStorage.setItem("adminToken", token);
export function getToken() {
  if (typeof window === 'undefined') return null; // server-side check
  return localStorage.getItem('token');
}

export const removeToken = () => localStorage.removeItem("adminToken");
