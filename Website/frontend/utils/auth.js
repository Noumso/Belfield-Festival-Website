export const setToken = (token) => localStorage.setItem("adminToken", token);
export const getToken = () => localStorage.getItem("adminToken");
export const removeToken = () => localStorage.removeItem("adminToken");
