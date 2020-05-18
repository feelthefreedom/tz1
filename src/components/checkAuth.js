export const checkAuth = (token) => {
    if (localStorage.getItem("jwt")) {
        return true;
    } else if (token.length > 2) {
        return true
    }
    return false;
}