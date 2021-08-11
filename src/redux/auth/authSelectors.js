const getIsAuthenticated = (state) => state.auth.isAuthenticated;
const getMail = (state) => state.auth.user.email;

export default { getIsAuthenticated, getMail };
